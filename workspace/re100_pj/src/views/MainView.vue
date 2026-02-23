<!-- 헤더, nav 탭 , 푸터 , 모달  -->
<template>
  <div id="app" class="bg-[#f2f4f7] min-h-screen ">
    <HeaderLayoutVue @tab-selected="handleTabChange"/>
    <div v-if="currentTab === tabs.REAL_TIME_INFO" class="relative z-20 bottom-[100px]  px-20">
      <MainContentCardsVue :cards="realTimeCards" :showMoreButton="true"  @show-more="showMoreModal"/>
      <EnergyTable/>
    </div>
    <div v-else-if="currentTab === tabs.COMPLIANCE_RATE" >
      <ComplianceRateView/>
    </div>
    <div v-else-if="currentTab === tabs.MANAGEMENT">
      <TabContent/>
    </div>
    <div v-else-if="currentTab === tabs.SETTINGS">
      <SettingView/>
    </div>
    <FooterLayoutVue/>
    <ProgressStatusModal v-if="showModal" @close="closeModal"/>
  </div>
</template>

<script>
import HeaderLayoutVue from '@/components/layouts/HeaderLayout.vue'
import FooterLayoutVue from '@/components/layouts/FooterLayout.vue'
import EnergyTable from '@/components/ui/table/EnergyTable.vue'
import ComplianceRateView from '@/views/rate/ComplianceRateView.vue'
import MainContentCardsVue from '@/components/ui/MainContentCards.vue'
import TabContent from '@/components/ui/TabContent.vue'
import SettingView from '@/views/setting/SettingView.vue'
import ProgressStatusModal from '@/components/ui/modal/ProgressStatusModal.vue'

const TABS = {
  REAL_TIME_INFO: '실시간 정보',
  COMPLIANCE_RATE: '이행률',
  MANAGEMENT: '관리',
  SETTINGS: '설정'
}

export default {
  name: 'App',
  components: {
    HeaderLayoutVue,
    FooterLayoutVue,
    EnergyTable,
    MainContentCardsVue,
    ComplianceRateView,
    TabContent,
    SettingView,
    ProgressStatusModal
  },
  data () {
    return {
      currentTab: TABS.REAL_TIME_INFO,
      tabs: TABS,
      showModal: false,
      realTimeCards: [
        { title: 'RE100 이행률', percentage: 50 },
        { title: '이행현황', percentage: 40 },
        { title: '전력 사용량', percentage: 16 },
        { title: '발전소 개소수', percentage: 20 }
      ],
      dashboardCards: [
        { title: 'RE100 이행률', percentage: 50 },
        { title: '이행현황', percentage: 40 },
        { title: '전력 사용량', percentage: 16 }
      ]
    }
  },
  methods: {
    handleTabChange (tab) {
      this.currentTab = tab
    },
    showMoreModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    }
  }
}
</script>

<style>
/* 전역 스타일 */
  body {
    margin: 0;
    font-family: 'Pretendard Variable', sans-serif;
  }

  #app {
    background-color: #f2f4f7;
    min-height: 100vh;
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
  }

  .bg-white {background-color: #ffffff;}

  .shadow-lg { box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);}

  .rounded-lg {  border-radius: 0.5rem;}

  .p-6 { padding: 1.5rem;}

  .mt-4 { margin-top: 1rem;}

  .pt-6 { padding-top: 1.5rem;}

  .pl-6 {padding-left: 1.5rem;}
</style>
