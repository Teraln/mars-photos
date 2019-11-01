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
                @change="assignCamera"
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
            <h1 v-if="!imageData.notEmpty">No images for this query...</h1>
            <v-img v-else :src="getCurrentPhoto" max-height="100%" contain justify="center"></v-img>
          </v-card>
        </v-col>
      </v-row>
      <!--Choose Day-->
      <v-row justify="center">
        <v-col class="col-md-10 col-sm-12">
          <v-card flat color="transparent">
            <v-subheader></v-subheader>

            <v-card-text class="pt-0">
              <!-- //TODO Use v-bind to bind the data-->

              <v-slider
                v-model="imageData.imgIndex"
                hint
                label="Images"
                persistent-hint
                step="1"
                ticks="always"
                tick-size="4"
                min="0"
                :max="imageData.links.length - 1"
                thumb-label="always"
              ></v-slider>
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
        id: 0,
        sol: 100,
        cameraIndex: 1,
        camera: "FHAZ"
      },
      imageData: {
        notEmpty: true,
        size: 0,
        imgIndex: 0,
        links: []
        //TODO add earth date later
      }
    };
  },
  computed: {
    getCamNames() {
      return this.roverManifests[this.queryData.id].cameras.shortNames;
    },
    getMaxSol() {
      return this.roverManifests[this.queryData.id].maxSol;
    },
    getCurrentPhoto() {
      return this.imageData.links[this.imageData.imgIndex];
    }
  },
  methods: {
    queryHandler: function() {
      for (let i = 0; i < this.roverManifests.length; i++) {
        if (this.roverManifests[i].selected) {
          this.queryData.rover = this.roverManifests[i].name;
          this.queryData.id = i;
        }
      }
    },

    getImages: async function() {
      const ePoint = this.queryData;
      const imagesRaw = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${ePoint.rover}/photos?sol=${ePoint.sol}&camera=${ePoint.camera}&api_key=${this.apiKey}`
      );

      const images = await imagesRaw.json();

      //TODO delet dis
      //const imgLog = console.log(images);

      return {
        //imgLog,
        images
      };
    },
    declareImages() {
      this.getImages().then(data => {
        //TODO delet dis
        console.log(data);
        if (data.images.photos.length === 0) {
          this.imageData.notEmpty = false;
        } else {
          for (let i = 0; i < data.images.photos.length; i++) {
            this.imageData.links.push(data.images.photos[i].img_src);
          }

          this.imageData.notEmpty = true;
        }
        this.imageData.imgIndex = 0;
      });
    },
    assignCamera: function() {
      this.queryData.camera = this.getCamNames[this.queryData.cameraIndex - 1];
      this.imageData.links = [];
      this.declareImages();
    }
  },
  beforeMount() {
    this.queryHandler();
    this.declareImages();
  },
  beforeUpdate() {
    
  },
  updated() {}
};
</script>

<style lang="scss" scoped>
.Viewer {
  height: 100%;
}
</style>