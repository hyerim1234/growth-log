<template>
  <div class="p-6 bg-white  rounded-lg">
    <h2 class="text-lg font-bold mb-4">발전소 할당</h2>
    <div class="flex justify-between items-center mb-4">
      <div class="flex space-x-2 w-full">
        <select class="p-2 border rounded-md w-1/2">
          <option>대분류</option>
        </select>
        <select class="p-2 border rounded-md  w-1/2">
          <option>소분류</option>
        </select>
      </div>
    </div>
    <div class="flex flex-col mb-4">
      <input type="text" placeholder="발전소 검색" class="p-2 border flex-grow rounded-l-md" />
      <button class="p-2 bg-gray-800 text-white-100 rounded-md mt-4">검색</button>
    </div>
    <div class="p-2 rounded-md mb-4 flex justify-between">
      검색 결과 24건
      <div>
        <input type="checkbox" class="w-6">
        할당가능한것만보기
      </div>
    </div>

    <div class="overflow-y-auto h-96 border rounded-lg">
      <div v-for="plant in plants" :key="plant.name" class="p-4 mb-4 border-b  flex justify-between items-center">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2 w-6">
          <div>
            <p class="font-bold text-blue-600">{{ plant.name }}</p>
            <p class="text-sm text-gray-600">{{ plant.details }}</p>
          </div>
        </div>
        <button class="w-40 border p-1 rounded-md text-sm font-semibold">%</button>
      </div>
    </div>

    <div class="flex justify-center mt-4 space-x-1">
      <button class="p-2 ">1</button>
      <button class="p-2 ">2</button>
      <button class="p-2 ">3</button>
      <button class="p-2 ">4</button>
      <button class="p-2 ">5</button>
      <button class="p-2 ">6</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      plants: [
        { name: '발전소 A', details: '(구미시 산동읍 군단리 123 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '발전소 B', details: '(경북 예천군 유천면 송전리 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '발전소 C', details: '(제주 서귀포시 남원읍 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '발전소 D', details: '(경기 화성시 향남읍 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '발전소 E', details: '(구미시 산동읍 군단리 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '발전소 F', details: '(경북 청송군 / 총 용량: 80MW / 잔여비율: 50%)' },
      ]
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
