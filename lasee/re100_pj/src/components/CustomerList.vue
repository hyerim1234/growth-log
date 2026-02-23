<template>
  <div class="p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-lg font-bold mb-4">고객사 리스트</h2>
    <div class="flex justify-between items-center mb-4">
      <div class="flex space-x-2 w-full">
        <select class="p-2 border rounded-md w-1/2">
          <option>대분류</option>
        </select>
        <select class="p-2 border rounded-md w-1/2">
          <option>소분류</option>
        </select>
      </div>
    </div>
    <div class="flex flex-col space-y-4">
      <input type="text" placeholder="고객사 검색" class="p-2 border flex-grow rounded-md" />
      <button class="p-2 bg-gray-800 text-white rounded-md w-full text-white-100">검색</button>
    </div>
    <div class=" p-2 rounded-md mt-4">검색 결과 24건</div>

    <div class="overflow-y-auto h-96 border ">
      <div v-for="customer in customers" :key="customer.name" class="p-2 border-b hover:bg-gray-50">
        <p class="font-bold text-blue-600">{{ customer.name }}</p>
        <p class="text-sm text-gray-600">{{ customer.details }}</p>
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
      customers: [
        { name: '고객사 A', details: '(발전소: 3개 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '고객사 B', details: '(발전소: 3개 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '고객사 C', details: '(발전소: 3개 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '고객사 D', details: '(발전소: 3개 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '고객사 E', details: '(발전소: 3개 / 총 용량: 80MW / 잔여비율: 50%)' },
        { name: '고객사 F', details: '(발전소: 3개 / 총 용량: 80MW / 잔여비율: 50%)' }
      ]
    }
  }
}
</script>

<style scoped>
/* 추가적인 스타일 필요 시 여기에 작성 */
</style>
