<template>
  <div class="Viewer">
    <v-container fluid fill-height>
      <!--Cameras-->
      <v-row justify="center">
        <v-col class="col-md-4 col-sm-10 col-xs-12">
          <v-card flat color="transparent">
            <v-subheader>Sol</v-subheader>

            <v-card-text class="pt-0">
              <!-- //TODO Use v-bind to bind the data-->

              <v-slider
                v-model="value"
                :rules="rules"
                hint="40 in stock"
                label="Cameras"
                persistent-hint
                step="1"
                thumb-label="always"
                ticks
              ></v-slider>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!--Pics-->
      <v-row justify="center">
        <v-col class="col-md-10 col-sm-12">
          <v-card height="50vh" max-width="100vw">
              <v-img src="@/assets/spirit.png" max-height="100%" contain justify="center"></v-img>
          </v-card>
        </v-col>
      </v-row>
      <!--Choose Day-->
      <v-row justify="center">
        <v-col class="col-md-10 col-sm-12">
          <v-card flat color="transparent">
            <v-subheader>Sol</v-subheader>

            <v-card-text class="pt-0">
              <!-- //TODO Use v-bind to bind the data-->

              <v-slider
                v-model="value"
                :rules="rules"
                hint="40 in stock"
                label="How many?"
                persistent-hint
                step="1"
                thumb-label="always"
                ticks
              ></v-slider>
            </v-card-text>
          </v-card>
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
    return {};
  }
};
</script>

<style lang="scss" scoped>
.Viewer {
  height: 100%;
}
</style>