<script setup lang="ts">
import './index.css'
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../store/counter";


// defineProps<{ msg: string }>();

const { count } = storeToRefs(useCounterStore());
const filePath = ref(null);
const openFile = async () => {
  //@ts-ignore
  filePath.value = await window.electronAPI.openFile();
};
const userData:any = reactive({
  data:[
    {name:'豹➗', prize:'恭喜豹➗中隐藏龙凤胎一对', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'豹➗', prize:'恭喜豹➗中隐藏龙凤胎一对', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
    {name:'M18', prize:'恭喜M18中隐藏3个男孩！', isFlipped:true},
  ]
})
const isFlipped = ref(true)
const cardFlipHandle = (item) => {
  item.isFlipped = !item.isFlipped
}
</script>

<template>
  <div class="home-container">
    <el-button>test</el-button>
    <div v-for="(item,index) in userData.data" :key="index" class="card" @click="cardFlipHandle(item)" :class="{ flipped: item.isFlipped }"  >
      <div class="card-inner">
        <div class="card-front">
          {{ item.prize }}
        </div>
        <div class="card-back">
        </div>
    </div>
    </div>
  </div>
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
