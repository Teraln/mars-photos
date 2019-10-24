<template>
  <div class="chooseRover">
    <v-container fill-height>
      <v-col cols="12">
        <v-row>
          <!--for each rover, card-->
          <v-card
            class="mx-auto"
            width="25%"
            raised
            shaped
            v-for="(roverManifest, index) in roverManifests"
            :key="`${roverManifest.name + index}`"
          >
            <v-list-item three-line shaped nav>
              <v-list-item-content>
                <div class="overline mb-4">{{ roverManifest.name }}</div>
                <v-list-item-title>Launch Date</v-list-item-title>
                <v-list-item-subtitle>{{ roverManifest.launchDate }}</v-list-item-subtitle>
                <v-list-item-title>Landing Date</v-list-item-title>
                <v-list-item-subtitle>{{ roverManifest.landingDate }}</v-list-item-subtitle>
                <v-list-item-title>Last Contact</v-list-item-title>
                <v-list-item-subtitle>{{ roverManifest.maxDate }}</v-list-item-subtitle>
                <v-list-item-title>Location</v-list-item-title>
                <v-list-item-subtitle>{{ roverManifest.location }}</v-list-item-subtitle>
                <v-list-item-title>Mission Status</v-list-item-title>
                <v-list-item-subtitle>{{ roverManifest.status }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <img :src="require(`@/assets/${roverManifest.name}.png`)" />
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn text>Button</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "chooseRover",
  props: ["roverManifests"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>