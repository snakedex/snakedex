<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <v-sheet
      height="20%"
      width="30%"
      class = "d-flex flex-column align-center justify-space-around align-content-center"
  >
    <v-btn
    >
      Select scenario from Github
    </v-btn>
    <v-btn
      @click="router.push('/selectFile')"
    >
      Select scenario from file
    </v-btn>
    <v-btn
    >
      Create scenario
    </v-btn>
  </v-sheet>
</template>

<style scoped>

</style>