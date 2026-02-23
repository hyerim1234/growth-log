<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="bg-white rounded-lg p-8 w-[500px]">
      <h2 class="text-lg font-bold mb-4">고객사 검색</h2>
      <input type="text" v-model="searchQuery" class="border p-2 w-full mb-4" placeholder="고객사"/>
      <button @click="search" class="bg-blue-500 text-white p-2 rounded mb-4">검색</button>
      <ul class="space-y-2">
        <li v-for="(customer, index) in filteredCustomers" :key="index" class="flex justify-between items-center p-2 border-b">
          <div>
            <input type="radio" :id="'customer' + index" v-model="selectedCustomer" :value="customer.name"/>
            <label :for="'customer' + index">{{ customer.name }} (총 용량: {{ customer.capacity }} / 이행률: {{ customer.progress }})</label>
          </div>
          <span :class="customer.status === '필요' ? 'text-red-500' : 'text-green-500'">{{ customer.status }}</span>
        </li>
      </ul>
      <div class="flex justify-between mt-4">
        <button @click="cancel" class="bg-gray-300 text-black p-2 rounded">취소</button>
        <button @click="select" class="bg-blue-500 text-white p-2 rounded">선택</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      selectedCustomer: null,
      customers: [
        { name: '고객사 A', capacity: '80MW', progress: '10%', status: '필요' },
        { name: '고객사 B', capacity: '100MW', progress: '20%', status: '적정' }
        // 더 많은 고객사 데이터
      ]
    }
  },
  computed: {
    filteredCustomers () {
      if (this.searchQuery === '') {
        return this.customers
      }
      return this.customers.filter(customer => customer.name.includes(this.searchQuery))
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
      this.$emit('select', this.selectedCustomer)
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
