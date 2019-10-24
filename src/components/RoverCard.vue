<template>
  <v-col justify="center">
    <v-card class="mx-auto" max-width="80%" raised shaped>
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
  </v-col>

  <!--<v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>Word of the Day</div>
      <p class="display-1 text--primary">be•nev•o•lent</p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.
        <br />"a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4">Learn More</v-btn>
    </v-card-actions>
  </v-card>-->
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