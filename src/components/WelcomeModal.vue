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
                <v-icon class="mr-1">mdi-information</v-icon>Rover Cameras
              </v-list-item-title>
              <CamTable />
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="mr-1">mdi-information</v-icon>Notes
              </v-list-item-title>
              <v-list-item-subtitle>Not all rovers have all of the cameras listed above.</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import CamTable from "./CamTable";

export default {
  name: "WelcomeModal",
  props: ["modalState"],
  components: { CamTable },
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