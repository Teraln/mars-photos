<template>
  <v-col justify="center" class="col-md-4 col-sm-12 mb-4">
    <v-card class="mx-auto" width="320" height="500" raised shaped>
      <v-row class="fill-height" cols="12">
        <v-col class="mb-5 col-8 col-md-8 col-sm-12">
          <v-list-item>
            <div class="overline mb-4 ml-3">{{ roverManifest.name }}</div>
          </v-list-item>
          <v-divider class="ml-2"></v-divider>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Launch Date</v-list-item-title>
              <v-list-item-subtitle inset>{{ roverManifest.launchDate }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-2"></v-divider>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Landing Date</v-list-item-title>
              <v-list-item-subtitle>{{ roverManifest.landingDate }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-2"></v-divider>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Last Contact</v-list-item-title>
              <v-list-item-subtitle>{{ roverManifest.maxDate }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-2"></v-divider>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Location</v-list-item-title>
              <v-list-item-subtitle>{{ roverManifest.location }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-2"></v-divider>

          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Mission Status</v-list-item-title>
              <v-list-item-subtitle>{{ roverManifest.status }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-2"></v-divider>
        </v-col>

        <v-col class="d-flex align-center flex-column col-md-4 col-sm-12">
          <v-list-item-avatar size="80" color="grey" class="d-flex align-self-end">
            <img :src="require(`@/assets/${roverManifest.name}.png`)" />
          </v-list-item-avatar>
        </v-col>
        <v-row width="100%" justify="center">
          <v-col cols="10">
            <v-list-item class="justify-center">
              <v-card-actions class="col-10">
                <v-btn
                  @click="clicked($event, roverManifest.id)"
                  raised
                  block
                  color="amber darken-4"
                  x-large
                  width="100%"
                  class="mb-4"
                >Select</v-btn>
              </v-card-actions>
            </v-list-item>
          </v-col>
        </v-row>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "RoverCard",
  props: ["roverManifest"],
  data() {
    return {};
  },
  methods: {
    clicked: function(event, roverID) {
      const ID = roverID;
      this.$eventHub.$emit("rover-selected", event, ID);
    }
  }
};
</script>