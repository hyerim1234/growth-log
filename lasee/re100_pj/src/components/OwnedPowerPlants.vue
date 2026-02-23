<template>
  <div class="p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-lg font-bold mb-4">소유 발전소</h2>
    <div class="overflow-y-scroll h-96">
      <div v-for="plant in ownedPlants" :key="plant.name" class="p-4 mb-4 border rounded-lg shadow flex justify-between items-center">
        <div class="flex items-center">
          <input type="checkbox" class="mr-2 w-6">
          <div>
            <p class="font-bold text-blue-600">{{ plant.name }}</p>
            <p class="text-sm text-gray-600">{{ plant.details }}</p>
          </div>
        </div>
        <button class="bg-blue-50 border border-blue-500 text-blue-500 p-1 rounded-2xl text-sm font-semibold">잔여 비율: {{ plant.remainingRate }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ownedPlants: [
        { name: '발전소 A', details: '경북 예천군 유천면 송전리', remainingRate: '20%' },
        { name: '발전소 B', details: '경북 구미시 산동읍 관리', remainingRate: '20%' },
        { name: '발전소 C', details: '제주 서귀포시 남원읍', remainingRate: '20%' },
        { name: '발전소 D', details: '경기 화성시 향남읍', remainingRate: '20%' },
      ]
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
