<!-- <template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="bg-white rounded-lg p-8 w-[300px]">
      <h2 class="text-lg font-bold mb-4">이행현황</h2>
      <div>
        <button @click="selectTab('자가소비')" :class="currentTab === '자가소비' ? 'font-bold' : ''">자가소비</button>
        <button @click="selectTab('PPA')" :class="currentTab === 'PPA' ? 'font-bold' : ''">PPA</button>
      </div>
      <div v-if="currentTab === '자가소비'">
        <p>전력 거래량: 100MW</p>
        <p>구매비용: 10,000,000원</p>
        <p>2024 예상 필요 거래량: 500MW</p>
      </div>
      <div v-else-if="currentTab === 'PPA'">
        <p>전력 거래량: 200MW</p>
        <p>구매비용: 20,000,000원</p>
        <p>2024 예상 필요 거래량: 1000MW</p>
      </div>
      <div class="flex justify-end mt-4">
        <button @click="close" class="bg-gray-300 text-black p-2 rounded">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: '자가소비'
    }
  },
  methods: {
    selectTab (tab) {
      this.currentTab = tab
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style> -->
<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="bg-white rounded-lg p-8 w-[500px]">
      <h2 class="text-lg font-bold mb-4">이행현황</h2>
      <div class="flex space-x-4 mb-4">
        <button @click="selectTab('자가소비')" :class="['px-4 py-2 rounded', currentTab === '자가소비' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black']">
          자가소비
        </button>
        <button @click="selectTab('PPA')" :class="['px-4 py-2 rounded', currentTab === 'PPA' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black']">
          PPA
        </button>
      </div>
      <div v-if="currentTab === '자가소비'" class="space-y-2">
        <p>전력 거래량: 100MW</p>
        <p>구매비용: 10,000,000원</p>
        <p>2024 예상 필요 거래량: 500MW</p>
      </div>
      <div v-else-if="currentTab === 'PPA'" class="space-y-2">
        <p>전력 거래량: 200MW</p>
        <p>구매비용: 20,000,000원</p>
        <p>2024 예상 필요 거래량: 1000MW</p>
      </div>
      <div class="flex justify-end mt-4">
        <button @click="close" class="bg-gray-300 text-black px-4 py-2 rounded">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: '자가소비'
    }
  },
  methods: {
    selectTab (tab) {
      this.currentTab = tab
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
