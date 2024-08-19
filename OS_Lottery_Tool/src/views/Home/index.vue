<script setup lang="ts">
import './index.css'
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../store/counter";

// defineProps<{ msg: string }>();

const { count } = storeToRefs(useCounterStore());
const filePath = ref(null);
const openFile = async () => {
  //@ts-ignore
  filePath.value = await window.electronAPI.openFile();
};
</script>

<template>
  <div class="home-container"></div>
  <!-- <p>
    <router-link to="/home" class="routerlink">Go to Home</router-link>
    <router-link to="/about" class="routerlink">Go to About</router-link>
  </p>
  <router-view /> -->
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
.routerlink {
  margin: 0 10px;
}
#examples {
  margin: 10px;
  display: flex;
  background-color: beige;
}
</style>
