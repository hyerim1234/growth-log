<template>
  <div>
    <MainContentCardsVue :cards="dashboardCards"  :showMoreButton="false"/>
    <!-- 실시간 총전력 현황 차트 -->
    <div class="rounded-lg shadow-lg mt-3 h-[456px] text-gray-500 p-3 pl-6 bg-white">
      실시간 총전력 현황 차트 준비중...
    </div>
  </div>
</template>

<script>
import MainContentCardsVue from '@/components/ui/MainContentCards.vue'

export default {
  components: {
    MainContentCardsVue
  },
  data () {
    return {
      dashboardCards: [
        { title: 'RE100 이행률', percentage: 50 },
        { title: '이행현황', percentage: 40 },
        { title: '전력 사용량', percentage: 16 }
      ]
    }
  }
}
</script>
