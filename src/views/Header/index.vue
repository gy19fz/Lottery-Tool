<script setup lang="ts">
import './index.css'
import { ref, reactive, computed } from "vue";
import * as XLSX from "xlsx"
import { useExcelStore } from '../../store/excel'

const excelStore = useExcelStore()

// 用于触发文件选择框的 ref
const fileInputRef = ref<HTMLInputElement | null>(null);

// 处理导入 Excel 文件的函数
const importXlsxData = () => {
  // 触发文件输入框的点击事件
  fileInputRef.value?.click();
};

// 处理文件选择变化
const handleFileChange = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const ab = e.target?.result;
      if (ab) {
        // 解析 Excel 文件
        const workbook = XLSX.read(ab, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        // 转换为 JSON 数据
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const excelData = jsonData.map((item:any,i)=>{
          return {
            name:item[0],
            prize: item[1],
            isFlipped: true,
          }
        }).filter(item => item.name !== '姓名')
        excelStore.updateData(excelData)
      }
    };

    // 读取文件
    reader.readAsArrayBuffer(file);
  }
};

</script>

<template>
  <div class="header">
    <el-button type="primary" round @click="importXlsxData">导入数据</el-button>
    <el-button type="primary" round >切洗卡组</el-button>
    <!-- 隐藏的文件选择框 -->
    <input type="file" ref="fileInputRef" @change="handleFileChange" style="display:none;" />
  </div>
</template>


