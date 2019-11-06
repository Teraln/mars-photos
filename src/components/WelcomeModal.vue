<template>
  <v-row justify="center">
    <v-dialog v-model="modalState" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="sendModalClosed($event, false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Information</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
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