<!-- 이행률 -->
<template>
  <div class="grid grid-cols-2 gap-4 mt-4 px-20">
      <RateEnergyTable
      title="자가소비"
      :headers="['년도', '설치용량', '설치비용', '수정']"
      :rows="[
        { year: 2023, capacity: '30MW', cost: '5000만원' },
        { year: 2024, capacity: '30MW', cost: '5000만원' },
        { year: 2025, capacity: '30MW', cost: '5000만원' },
        { year: 2026, capacity: '30MW', cost: '5000만원' },
        { year: 2027, capacity: '30MW', cost: '5000만원' },
        { year: 2028, capacity: '30MW', cost: '5000만원' },
      ]"
    />
    <RateEnergyTable
      title="REC 구매"
      :headers="['년도', '구매량', '구매비용', '수정']"
      :rows="[
        { year: 2023, purchase: '30MW', cost: '5000만원' },
        { year: 2024, purchase: '30MW', cost: '5000만원' },
        { year: 2025, purchase: '30MW', cost: '5000만원' },
        { year: 2026, purchase: '30MW', cost: '5000만원' },
        { year: 2027, purchase: '30MW', cost: '5000만원' },
        { year: 2028, purchase: '30MW', cost: '5000만원' },
      ]"
    />
    <RateEnergyTable
      title="PPA"
      :headers="['년도', '구매전력', '구매비용', '수정']"
      :rows="[
        { year: 2023, power: '30MW', cost: '5000만원' },
        { year: 2024, power: '30MW', cost: '5000만원' },
        { year: 2025, power: '30MW', cost: '5000만원' },
        { year: 2026, power: '30MW', cost: '5000만원' },
        { year: 2027, power: '30MW', cost: '5000만원' },
        { year: 2028, power: '30MW', cost: '5000만원' },
      ]"
    />
    <RateEnergyTable
      title="녹색프리미엄"
      :headers="['날짜', '할당량', 'Co2절감량', 'INV 4', '수정']"
      :rows="[
        { date: '2024-05', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2025-03', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2026-03', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2027-06', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2028-07', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '30MW' },
      ]"
    />
    <RateEnergyTable
      title="지분참여"
      :headers="['날짜', '할당량', 'Co2절감량', 'INV 4', '수정']"
      :rows="[
        { date: '2024-05', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2025-03', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2026-03', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2027-06', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '20MW' },
        { date: '2028-07', allocation: '50MW', co2Reduction: '0.01 ton', inv4: '30MW' },
      ]"
    />
</div>

</template>

<script>
import RateEnergyTable from '@/components/ui/table/RateEnergyTable.vue'

export default {
  components: {
    RateEnergyTable
  },
  data () {
    return {
      selectedCustomer: '고객사 A'
    }
  }
}
</script>

<style scoped>
/* 추가 스타일링 */
</style>
