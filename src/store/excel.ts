import { defineStore } from 'pinia'

export const useExcelStore = defineStore({
    id: 'excelData',
    state: () => ({
        data: []
    }),
    actions: {
        updateData(newData){
            this.data = newData
        }
    }
})