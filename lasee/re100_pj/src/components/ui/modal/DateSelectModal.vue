<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="bg-white rounded-lg p-8 w-[400px]">
      <h2 class="text-lg font-bold mb-4">시간별 발전량</h2>
      <input type="date" v-model="selectedDate" class="border p-2 w-full mb-4"/>
      <button @click="search" class="bg-blue-500 text-white p-2 rounded mb-4">검색</button>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p>{{ selectedDate }} 발전량: 50MW</p>
        <!-- 예시 데이터 -->
      </div>
      <div class="flex justify-between mt-4">
        <button @click="cancel" class="bg-gray-300 text-black p-2 rounded">취소</button>
        <button @click="select" class="bg-blue-500 text-white p-2 rounded">확인</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedDate: ''
    }
  },
  methods: {
    search () {
      // 검색 로직 구현
    },
    cancel () {
      this.$emit('close')
    },
    select () {
      // 선택 로직 구현
      this.$emit('select', this.selectedDate)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
