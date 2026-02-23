<template>
  <div class="flex  align-center justify-between">
    <!-- <h1 class="text-lg font-bold">연도별 이행률</h1> -->
    <form class="flex items-center ">
      <span class="sm:px-3.5 p-3  border rounded-l border-gray-300">
          <img src="https://jdtech.farm.lasee.io/images/calender.svg">
      </span>
      <div class="relative">
          <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="2024" required />
          <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white-100">
            검색
            <!-- <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg> -->
          </button>
      </div>
    </form>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <table class="w-full text-sm text-center text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-300">
        <tr>
          <th v-for="header in headers" :key="header" scope="col" class="px-6 py-3">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, index) in rows" :key="index" class="bg-white border-b hover:bg-gray-50">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
