<template>
  <div class="p-6 flex align-center justify-between flex-col bg-white shadow-lg rounded-lg mt-4">
    <h2 class="text-lg font-bold mb-4">고객사 리스트</h2>
    <ReusableTable :headers="headers" :rows="rows" :rowsPerPage="5" />
  </div>
</template>

<script>
import ReusableTable from '@/components/ui/table/ReusableTable.vue'

export default {
  components: {
    ReusableTable
  },
  data () {
    return {
      headers: ['이름', '개소수', '용량', '형태', '달성률', '위치'],
      rows: [
        ['이름', '2개소', '300MW', '자가소비(혼합)', '76%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '17%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍'],
        ['이름', '3개소', '500MW', '자가소비', '48%', '경북 구미시 산동읍']
      ]
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
