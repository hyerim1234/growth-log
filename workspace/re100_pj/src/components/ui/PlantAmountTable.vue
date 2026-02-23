<template>
  <div class="w-3/4 p-4 bg-white ">
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="space-y-4">
        <p><strong>주소:</strong> 구미 산업단지 / 경북 구미시 산동읍</p>
        <p><strong>번호:</strong> 12354</p>
        <p><strong>라씨:</strong> 12354</p>
        <p><strong>발전용량:</strong> 12354</p>
        <p><strong>메일주소:</strong> re100@hanmail.net</p>
      </div>
      <div class="space-y-4">
        <p><strong>계통기 개수:</strong> 1</p>
        <p><strong>고객사 개수:</strong> 4</p>
        <p><strong>비율:</strong> 80/100</p>
        <p><strong>사업주:</strong> 최종남</p>
        <p><strong>인버터:</strong> dasstech HS-P100Glo (100KW)</p>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/ui/pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      entries: [
        { date: '2024-04-02', totalGeneration: '100MW', generation: '10MW', reserve: '에러' },
        { date: '2024-04-03', totalGeneration: '100MW', generation: '10MW', reserve: '없음' }

      ]
    }
  },
  methods: {
    showDetails (entry) {
      // 더보기 버튼 클릭 시 처리할 로직을 여기에 추가
      alert(`날짜: ${entry.date}\n총 발전량: ${entry.totalGeneration}\n발전량: ${entry.generation}\n예비발생: ${entry.reserve}`)
    }
  }
}
</script>

<style scoped>
/* 필요한 경우 여기에 사용자 정의 스타일을 추가하세요 */
</style>
