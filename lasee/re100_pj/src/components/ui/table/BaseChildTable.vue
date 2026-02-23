<template>
  <div class="w-3/4 p-4 bg-white shadow-lg">
    <h2 class="text-lg font-bold mb-4">발전소 A</h2>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <!-- Other content -->
    </div>
    <div>
      <h3 class="text-md font-bold mb-2">일별발전량</h3>
      <BaseTable :data="entries" :columns="columns">
        <template #actions="{ row }">
          <button @click="showDetails(row)" class="p-1 bg-gray-200 rounded">+</button>
        </template>
      </BaseTable>
    </div>
    <pagination />
  </div>
</template>

<script>
import BaseTable from '@/components/ui/table/BaseTable.vue'
import Pagination from '../pagination.vue' // 수정된 부분

export default {
  components: {
    BaseTable,
    Pagination
  },
  data () {
    return {
      entries: [
        { date: '2024-04-02', totalGeneration: '100MW', generation: '10MW', reserve: '에러' },
        { date: '2024-04-03', totalGeneration: '100MW', generation: '10MW', reserve: '없음' }
        // 추가 일별발전량 데이터...
      ],
      columns: [
        { label: '날짜', field: 'date' },
        { label: '총 발전량', field: 'totalGeneration' },
        { label: '발전량', field: 'generation' },
        { label: '예비발생', field: 'reserve' },
        { label: '더보기', field: 'actions', slot: 'actions' }
      ]
    }
  },
  methods: {
    showDetails (entry) {
      alert(`날짜: ${entry.date}\n총 발전량: ${entry.totalGeneration}\n발전량: ${entry.generation}\n예비발생: ${entry.reserve}`)
    }
  }
}
</script>
