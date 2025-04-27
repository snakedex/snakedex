<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, computed } from "vue";


const router = useRouter();
const file = ref<File | null>(null);
const fileContent = ref<string|null|undefined|ArrayBuffer>('');

const readFile = () => {
  if (!file.value) {
    fileContent.value = 'No file selected'
    return;
  }

  const selectedFile = file.value
  const reader = new FileReader()

  reader.onload = (e) =>
  {
    fileContent.value = e.target?.result
  }

  reader.onerror = (e) => {
    console.error('Error reading file', e)
  }

  reader.readAsText(selectedFile)

}

</script>

<template>
  <v-card
      width="100%"
      height="100%"
    class="d-flex flex-column align-center justify-center"
  >
  <v-btn @click="router.push('/')">Go back</v-btn>
    <v-sheet
      height="30px"
      />
    <v-sheet
      height="50px"
      width="70%"
      >
  <v-file-input
      clearable
      v-model="file"
      density="compact"
      @change="readFile"
      @click:clear="fileContent = ''"
  ></v-file-input>
    </v-sheet>
    <v-sheet
      height="400px"
      width="90%"
      class="d-flex justify-space-between"
    >
      <v-sheet
        height="100%"
        width="45%"
      >
      {{ fileContent?fileContent:'No file selected' }}
      </v-sheet>
      <v-sheet
          height="100%"
          width="45%"
      >
      Scheme
      </v-sheet>
    </v-sheet>
  </v-card>
</template>

<style scoped>

</style>