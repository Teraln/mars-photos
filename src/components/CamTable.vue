<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Full</th>
          <th class="text-left">Short</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cameras" :key="item.name">
          <td>{{ item.full }}</td>
          <td>{{ item.short }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "CamTable",
  data() {
    return {
      cameras: [
        { short: "FHAZ", full: "Front Hazard Avoidance Camera" },
        { short: "RHAZ", full: "Rear Hazard Avoidance Camera" },
        { short: "MAST", full: "Mast Camera" },
        { short: "CHEMCAM", full: "Chemistry and Camera Complex" },
        { short: "MAHLI", full: "Mars Hand Lens Imager" },
        { short: "MARDI", full: "Mars Descent Imager" },
        { short: "NAVCAM", full: "Navigation Camera" },
        { short: "PANCAM", full: "Panoramic Camera" },
        {
          short: "MINITES",
          full: "Miniature Thermal Emission Spectrometer (Mini-TES)"
        }
      ]
    };
  }
};
</script>