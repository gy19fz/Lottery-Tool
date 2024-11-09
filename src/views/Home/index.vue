<script setup lang="ts">
import './index.css'
import { ref, reactive, computed } from "vue";
import { useExcelStore } from '../../store/excel'

const excelStore = useExcelStore()
const xlsxData:any = computed(() => excelStore.data)
console.log(xlsxData.value)
// const filePath = ref(null);
// const openFile = async () => {
//   //@ts-ignore
//   filePath.value = await window.electronAPI.openFile();
// };
const ifFold = ref(false)
const isFlipped = ref(true)
const cardFlipHandle = (item) => {
  item.isFlipped = !item.isFlipped
}
</script>

<template>
  <div class="home-container">
    <div v-for="(item,index) in xlsxData" 
      :key="index" 
      class="card" 
      @click="cardFlipHandle(item)" 
      :class="{ flipped: item.isFlipped }"  
      :style="ifFold ? { 
        position: 'absolute', 
        left: '0', 
        top: '64px', 
        zIndex: 10 * index /* 使卡片有层次感，防止完全重叠 */ 
      } : { 
        position: 'relative', 
        transform: 'translateY(0)' 
      }"
    >
      <div class="card-inner">
        <div class="card-front">
          {{ item.prize }}
        </div>
        <div class="card-back">
        </div>
    </div>
    </div>
  </div>
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
