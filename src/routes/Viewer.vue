<template>
  <div class="Viewer">
    <v-container fluid fill-height>
      <!--Cameras-->
      <v-row justify="center">
        <v-col class="col-md-6 col-sm-10 col-xs-12">
          <v-card flat color="transparent">
            <v-subheader></v-subheader>

            <v-card-text class="pt-0">
              <!-- //TODO Use v-bind to bind the data-->
              <!--v-model="camera"-->
              <v-slider
                v-model="queryData.cameraIndex"
                label="Cameras"
                persistent-hint
                step="1"
                min="1"
                :max="this.getCamNames.length"
                thumb-label="always"
                ticks="always"
                tick-size="4"
                :tick-labels="this.getCamNames"
              ></v-slider>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--Pics-->
      <v-row justify="center">
        <v-col class="col-md-10 col-sm-12">
          <v-card height="50vh" max-width="100vw">
            <v-img src="@/assets/spirit.png" max-height="100%" contain justify="center"></v-img>
          </v-card>
        </v-col>
      </v-row>
      <!--Choose Day-->
      <v-row justify="center">
        <v-col class="col-md-10 col-sm-12">
          <v-card flat color="transparent">
            <v-subheader>Sol</v-subheader>

            <v-card-text class="pt-0">
              <!-- //TODO Use v-bind to bind the data-->

              <!--<v-slider
                v-model="value"
                :rules="rules"
                hint="40 in stock"
                label="How many?"
                persistent-hint
                step="1"
                thumb-label="always"
                ticks
              ></v-slider>-->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Viewer",
  props: ["roverManifests"],
  data() {
    return {
      apiKey: "LnzS3rdqPFeIZMnbzNK4E7wD8WfFxVfFQcrAdslf",
      queryData: {
        rover: "",
        id: -1,
        sol: 50,
        cameraIndex: -1,
        camera: ""
      }
    };
  },
  computed: {
    getCamNames() {
      return this.roverManifests[this.queryData.id].cameras.shortNames;
    }
  },
  methods: {
    queryHandler: function() {
      for (let i = 0; i < this.roverManifests.length; i++) {
        if (this.roverManifests[i].selected) {
          this.queryData.rover = this.roverManifests[i].name;
          this.queryData.id = i;
        }
      } //TODO delet dis
      console.log(this.queryData.id);
    },

    getImages: async function() {
      const ePoint = this.queryData;
      const imagesRaw = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${ePoint.rover}/photos?sol=${ePoint.sol}&camera=${ePoint.camera}&api_key=${this.apiKey}`
      );

      const images = await imagesRaw.json();
      //TODO delet dis
      const imgLog = console.log(images);

      return {
        imgLog,
        images
      };
    },
    assignCamera: function() {
      this.queryData.camera = this.getCamNames[this.queryData.cameraIndex - 1]
    }
  },
  beforeMount() {
    this.queryHandler();
    this.getImages();
  },
  updated() {
    this.assignCamera();
  }
};
</script>

<style lang="scss" scoped>
.Viewer {
  height: 100%;
}
</style>