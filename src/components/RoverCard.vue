<template>
  <v-col justify="center">
    <v-card class="mx-auto" max-width="60%" raised shaped>
      <v-row class="fill-height" cols="12">
        <v-col class="mb-5">
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

        <v-col class="d-flex align-center flex-column">
          <v-list-item-avatar tile size="80" color="grey" class="d-flex align-self-end">
            <img :src="require(`@/assets/${roverManifest.name}.png`)" />
          </v-list-item-avatar>
          <v-list-item>
            <v-card-actions>
              <v-btn raised rounded x-large fab>Select</v-btn>
            </v-card-actions>
          </v-list-item>
        </v-col>
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
  }
};
</script>