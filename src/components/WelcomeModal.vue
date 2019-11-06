<template>
  <v-row justify="center">
    <v-dialog v-model="modalState" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="amber darken-4">
          <v-toolbar-title>Information</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="sendModalClosed($event, false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <!--Content-->
        <v-list three-line subheader>
          <v-subheader>Sol</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="mr-1">mdi-information</v-icon>What is a Sol?
              </v-list-item-title>
              <v-list-item-subtitle>Sol (borrowed from the Latin word for sun) is a Mars solar day; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian (sundial time) as seen by an observer on Mars.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="mr-1">mdi-information</v-icon>Rover cameras
              </v-list-item-title>

              <v-list-item-subtitle>FHAZ - Front Hazard Avoidance Camera</v-list-item-subtitle>
              <v-list-item-subtitle>RHAZ - Rear Hazard Avoidance Camera</v-list-item-subtitle>
              <v-list-item-subtitle>MAST - Mast Camera</v-list-item-subtitle>
              <v-list-item-subtitle>CHEMCAM - Chemistry and Camera Complex</v-list-item-subtitle>
              <v-list-item-subtitle>MAHLI - Front Hazard Avoidance Camera</v-list-item-subtitle>
              <v-list-item-subtitle>MARDI - Front Hazard Avoidance Camera</v-list-item-subtitle>
              <v-list-item-subtitle>NAVCAM - Front Hazard Avoidance Camera</v-list-item-subtitle>
              <v-list-item-subtitle>PANCAM - Front Hazard Avoidance Camera</v-list-item-subtitle>
              <v-list-item-subtitle>MINITES - Front Hazard Avoidance Camera</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "WelcomeModal",
  props: ["modalState"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    sendModalClosed: function(event, bool) {
      this.$eventHub.$emit("close-modal", event, bool);
    }
  }
};
</script>