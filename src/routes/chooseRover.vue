<template>
  <div class="Settings">
    <v-container fill-height >
      <v-row justify-space-around>
        <RoverCard />
        <RoverCard />
        <RoverCard />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RoverCard from "@/components/RoverCard.vue";

export default {
  name: "Settings",
  components: {
    RoverCard
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.Settings {
  height: 100%;
}
</style>