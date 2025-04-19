<script lang="ts" setup>

</script>

<template>
  <v-sheet
    height="100%"
    width="100%"
    class = "d-flex align-center align-content-center justify-center"
  >
    <v-sheet
      height="20%"
      width="30%"
      class = "d-flex flex-column align-center justify-space-around align-content-center"
      >
      <v-btn
      >
        Select scenario from Github
      </v-btn>
      <v-btn>
        Select scenario from file
      </v-btn>
      <v-btn
      >
        Create scenario
      </v-btn>
    </v-sheet>
  </v-sheet>
</template>

<style>
#logo {
  display: block;
  width: 50%;
  height: 50%;
  margin: auto;
  padding: 10% 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;
}
</style>
