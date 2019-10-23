<template>
  <div class="chooseRover">
    <v-container fill-height :align="alignment" :justify="justify">
      <v-col cols="12">
        <v-row :align="alignment" :justify="justify" class="grey lighten-5" style="height: 300px;">
          <!--for each rover, card-->
          <v-card
            class="mx-auto"
            width="25%"
            raised
            shaped
            v-for="roverManifest in roverManifests"
            :key="roverManifest"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{ roverManifest.name }}</div>
                <v-list-item-subtitle>{{ `Launch Date: ${roverManifest.launchDate}` }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ `Landing Date: ${roverManifest.landingDate}` }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ `Last Contact: ${roverManifest.maxDate}` }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ `Cameras: ${roverManifest.launchDate}` }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ `Location: ${roverManifest.location}` }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ `Mission Status: ${roverManifest.status}` }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
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
  name: "Settings",
  props: ["roverManifests"],
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

</style>