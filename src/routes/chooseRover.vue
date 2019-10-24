<template>
  <div class="chooseRover">
    <v-container fluid fill-height>
      <v-row no-gutters>
          <RoverCard
            v-for="roverManifest in roverManifests"
            :key="roverManifest.id"
            :roverManifest="roverManifest"
          />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RoverCard from "@/components/RoverCard.vue";

export default {
  name: "chooseRover",
  props: ["roverManifests"],
  components: {
    RoverCard
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.chooseRover {
  height: 100%;
}
</style>