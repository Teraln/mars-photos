<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped temporary>
      <v-list dense>
        <v-list-item>
          <!--@click=""-->
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <!--@click=""-->
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Choose your rover...</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mars Photos</v-toolbar-title>
    </v-app-bar>

    <v-content>

      <router-view :roverManifests='roverManifests'></router-view>

    </v-content>
    <v-footer app>
      <span>&copy; 2019 Teraln</span>
    </v-footer>
  </v-app>
</template>

<script>
/*TODO @beforecreate => get manifests:
  latest photos (last element of response):
  https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=LnzS3rdqPFeIZMnbzNK4E7wD8WfFxVfFQcrAdslf
  get res.rover.max_sol, res.rover.max_date, res.rover
  */

export default {
  data: () => ({
    apiKey: "LnzS3rdqPFeIZMnbzNK4E7wD8WfFxVfFQcrAdslf",
    drawer: null,
    //API --filter by: ROVER, CAMERA, [SOL, DATE], {manifest}
    //Manifest
    roverManifests: [
      {
        name: "spirit",
        launchDate: null,
        landingDate: null,
        status: null,
        maxSol: null,
        maxDate: null,
        cameras: null,
        location: "Gusev crater, Mars"
      },
      {
        name: "opportunity",
        launchDate: null,
        landingDate: null,
        status: null,
        maxSol: null,
        maxDate: null,
        cameras: null,
        location: "Victoria crater, Mars"
      },
      {
        name: "curiosity",
        launchDate: null,
        landingDate: null,
        status: null,
        maxSol: null,
        maxDate: null,
        cameras: null,
        location: "Gale crater, Mars"
      }
    ]
  }),

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

      const tempArr = console.log([
        spiritManifest,
        opportunityManifest,
        curiosityManifest
      ]);

      return {
        tempArr,
        data: [spiritManifest, opportunityManifest, curiosityManifest]
      };
    },
    declareManifests() {
      this.getManifests().then(manifest => {
        for (let index = 0; index < this.roverManifests.length; index++) {
          this.roverManifests[index].launchDate =
            manifest.data[index].latest_photos[0].rover.launch_date;
          this.roverManifests[index].landingDate =
            manifest.data[index].latest_photos[0].rover.landing_date;
          this.roverManifests[index].status =
            manifest.data[index].latest_photos[0].rover.status;
          this.roverManifests[index].maxSol =
            manifest.data[index].latest_photos[0].rover.max_sol;
          this.roverManifests[index].maxDate =
            manifest.data[index].latest_photos[0].rover.max_date;
          this.roverManifests[index].cameras =
            manifest.data[index].latest_photos[0].rover.cameras;

          console.log(this.roverManifests[index]);
        }
      });
    }

    //`https://api.nasa.gov/mars-photos/api/v1/rovers/${eachRover}/photos?sol=1&api_key=${this.apiKey}`,
    //https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1&api_key=${this.apiKey}
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
  beforeMount() {
    this.declareManifests();
  }
};
</script>
  /* eslint-disable */
/* eslint-enable */
