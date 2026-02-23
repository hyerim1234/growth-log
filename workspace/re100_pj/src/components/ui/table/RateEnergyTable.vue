<template>
  <div class="bg-white shadow-sm rounded-lg p-4">
    <div class="flex justify-between items-center mb-2">
      <h2 class="font-bold text-lg">{{ title }}</h2>
      <button class="text-white-800 border border-blue-500 rounded px-3 py-1 transition">
        + 신규등록
      </button>
    </div>
    <table class="min-w-full bg-white text-center">
      <thead class="bg-gray-100">
        <tr>
          <th v-for="header in headers" :key="header" class="py-2 px-4 border-b">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="rows.length === 0">
          <td colspan="5" class="py-2 px-4 border-b">데이터가 없습니다.</td>
        </tr>
        <tr v-for="(row, index) in rows" :key="index" v-else>
          <td v-for="(value, key) in row" :key="key" class="py-2 px-4 border-b">{{ value }}</td>
          <td class="py-2 px-4 border-b">
            <button class="text-gray-800">
              <img :src="imagePath" alt="Edit">
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center items-center mt-4">
      <pagination></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '../pagination.vue'

export default {
  components: { pagination },
  props: {
    title: String,
    headers: Array,
    rows: Array
  },
  data () {
    return {
      imagePath: require('@/assets/edit.svg')
    }
  }
}
</script>

<style scoped>
/* 추가 스타일링 */
</style>
