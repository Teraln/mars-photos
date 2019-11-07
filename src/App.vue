<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left height="45">
      <v-toolbar-title>Mars Photos</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn v-show="returnRoute" text icon fab dark small>
          <v-icon color="amber darken-4">mdi-settings</v-icon>
        </v-btn>
      </router-link>

      <v-btn @click="modalState = true" text icon fab dark small>
        <v-icon color="amber darken-4">mdi-information</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <WelcomeModal :modalState="modalState" />
      <router-view :roverManifests="roverManifests"></router-view>
    </v-content>
    <v-footer app>
      <span>
        &copy; 2019
        <a href="https://github.com/Teraln" target="_blank">Teraln</a>
      </span>
      <v-spacer></v-spacer>
      <span>
        API by
        <a href="https://github.com/chrisccerami/" target="_blank">Chris Cerami</a>
      </span>
      <img class="ml-4" src="https://img.icons8.com/color/24/000000/nasa.png" alt="NasaIcon" />
    </v-footer>
  </v-app>
</template>

<script>
import WelcomeModal from "./components/WelcomeModal";

export default {
  components: {
    WelcomeModal
  },
  data: () => ({
    modalState: false,
    apiKey: "LnzS3rdqPFeIZMnbzNK4E7wD8WfFxVfFQcrAdslf",
    drawer: false,
    //Manifest
    roverManifests: [
      {
        id: 0,
        name: "spirit",
        launchDate: "",
        landingDate: "",
        status: "",
        maxSol: 0,
        maxDate: "",
        cameras: {
          fullNames: [],
          shortNames: []
        },
        location: "Gusev crater, Mars",
        selected: false
      },
      {
        id: 1,
        name: "opportunity",
        launchDate: "",
        landingDate: "",
        status: "",
        maxSol: 0,
        maxDate: "",
        cameras: {
          fullNames: [],
          shortNames: []
        },
        location: "Victoria crater, Mars",
        selected: false
      },
      {
        id: 2,
        name: "curiosity",
        launchDate: "",
        landingDate: "",
        status: "",
        maxSol: 0,
        maxDate: "",
        cameras: {
          fullNames: [],
          shortNames: []
        },
        location: "Gale crater, Mars",
        selected: false
      }
    ]
  }),
  computed: {
    returnRoute() {
      if (this.$route.path === "/") {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    async getManifests() {
      const getSpirit = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.roverManifests[0].name}/latest_photos?api_key=${this.apiKey}`
      );
      const getOpportunity = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.roverManifests[1].name}/latest_photos?api_key=${this.apiKey}`
      );
      const getCuriosity = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.roverManifests[2].name}/latest_photos?api_key=${this.apiKey}`
      );

      const spiritManifest = await getSpirit.json();
      const opportunityManifest = await getOpportunity.json();
      const curiosityManifest = await getCuriosity.json();

      return {
        data: [spiritManifest, opportunityManifest, curiosityManifest]
      };
    },
    declareManifests() {
      this.getManifests().then(manifest => {
        for (let i = 0; i < this.roverManifests.length; i++) {
          let apiEndPoint = manifest.data[i].latest_photos[0].rover;

          this.roverManifests[i].launchDate = apiEndPoint.launch_date;
          this.roverManifests[i].landingDate = apiEndPoint.landing_date;
          this.roverManifests[i].status = apiEndPoint.status;
          this.roverManifests[i].maxSol = apiEndPoint.max_sol;
          this.roverManifests[i].maxDate = apiEndPoint.max_date;

          //Create separate arrays of full camera names and short camera names

          let camFullNames = [];
          let camShortNames = [];

          for (let j = 0; j < apiEndPoint.cameras.length; j++) {
            camFullNames.push(apiEndPoint.cameras[j].full_name);
            camShortNames.push(apiEndPoint.cameras[j].name);
          }

          this.roverManifests[i].cameras.fullNames = camFullNames;
          this.roverManifests[i].cameras.shortNames = camShortNames;

          console.log(this.roverManifests[i]); //TODO LOG
        }
      });
    }

    //`https://api.nasa.gov/mars-photos/api/v1/rovers/${eachRover}/photos?sol=1&api_key=${this.apiKey}`,
    //https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1&api_key=${this.apiKey}
  },
  beforeCreate(){
        window.onload = () => {
      this.$router.push({ path: "/" });
    };
  },
  created() {
    this.$vuetify.theme.dark = true;

  },
  beforeMount() {
    this.declareManifests();

    this.$eventHub.$on("rover-selected", (event, roverID) => {
      //      console.log(this.roverManifests[roverID].selected)

      if (event) {
        event.preventDefault();

        for (let i = 0; i < this.roverManifests.length; i++) {
          this.roverManifests[i].selected = false;
        }
        this.roverManifests[roverID].selected = true;
      }

      this.$router.push({ path: "viewer" });
    });
  },
  beforeUpdate() {
    this.$eventHub.$on("close-modal", (event, bool) => {
      event.preventDefault();
      this.modalState = bool;
    });
  },
  beforeDestroy() {
    this.$eventHub.$off("rover-selected");
  }
};
</script>
  /* eslint-disable */
/* eslint-enable */
