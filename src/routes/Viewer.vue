<template>
  <div class="Viewer">
    <v-container>
      <v-row justify="center">
        <!--Sol-->
        <v-col class="col-auto col-md-2" justify="center">
          <v-card flat color="transparent" class="solSwitch">
            <v-text-field
              @input="solSwitch"
              v-model="queryData.sol"
              label="Sol"
              :hint="`Max: ${maxSol}`"
              outlined
              type="number"
              min="1"
              :max="maxSol"
              :maxlength="4"
            />
          </v-card>
        </v-col>
        <!--Cameras-->
        <v-col class="py-0 col-12 col-md-8">
          <v-card flat color="transparent">
            <v-card-text class="pt-0">
              <v-slider
                v-model="queryData.cameraIndex"
                @change="assignCamera"
                hint="Cameras"
                persistent-hint
                step="1"
                min="1"
                :max="this.getCamNames.length"
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
        <v-col class="col-12">
          <v-card height="55vh" align="center">
            <h1
              v-if="!imageData.notEmpty"
              class="text-center pt-5"
              color="amber lighten-4"
            >No images for this query...</h1>

            <v-img v-else :src="getCurrentPhoto" max-height="100%" contain allign="center"></v-img>
          </v-card>
        </v-col>
      </v-row>
      <!--Choose Day-->
      <v-row justify="center" class="mt-3">
        <v-col class="col-1" align="center">
          <v-btn @click="imgSwitch(false)" text icon color="primary">
            <v-icon size="56">mdi-chevron-left</v-icon>
          </v-btn>
        </v-col>
        <v-col class="col-md-8 col-sm-10">
          <v-card flat color="transparent">
            <v-card-text class="pt-0">
              <!-- //TODO Use v-bind to bind the data-->
              <v-slider
                v-model="imageData.imgIndex"
                hint="Images"
                persistent-hint
                step="1"
                ticks="always"
                tick-size="4"
                :thumb-size="24"
                :thumb-label="imgThumbLabel"
                min="0"
                :max="imageData.links.length - 1"
              ></v-slider>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="col-1" justify="center" align="center">
          <v-btn @click="imgSwitch(true)" text icon color="primary">
            <v-icon size="56">mdi-chevron-right</v-icon>
          </v-btn>
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
        sol: 50,
        cameraIndex: 1,
        camera: "FHAZ"
      },
      imageData: {
        notEmpty: true,
        size: 0,
        imgIndex: 0,
        links: [],
        earthDate: ""
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
    },
    imgThumbLabel() {
      if (this.imageData.imgIndex >= 0) {
        return "always";
      } else {
        return true;
      }
    },
    maxSol() {
      return this.roverManifests[this.queryData.id].maxSol;
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
    imgSwitch(int) {
      if (this.imageData.imgIndex > 0 && int === false) {
        this.imageData.imgIndex--;
      } else if (int === true) {
        this.imageData.imgIndex++;
      }
    },
    getImages: async function() {
      const ePoint = this.queryData;
      const imagesRaw = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${ePoint.rover}/photos?sol=${ePoint.sol}&camera=${ePoint.camera}&api_key=${this.apiKey}`
      );

      const images = await imagesRaw.json();


      return {
        images
      };
    },
    declareImages() {
      this.getImages().then(data => {
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
    },
    solSwitch: function() {
      this.assignCamera();
    }
  },
  beforeMount() {
    this.queryHandler();
    this.declareImages();
    this.assignCamera();
  },
  beforeUpdate() {},
  updated() {}
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.solSwitch {
  max-width: 6rem !important;
  min-width: 6rem !important;
}
</style>