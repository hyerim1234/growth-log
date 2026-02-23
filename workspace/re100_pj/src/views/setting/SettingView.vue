<template>
  <common-layout>
    <nav class="flex space-x-4 bg-[#0b2549] pt-4 pl-20">
      <a v-for="tab in tabs" :key="tab"
         :class="['py-2 px-4 text-md font-bold text-center cursor-pointer',
                  currentTab === tab ? 'bg-[#f2f4f7] text-[#0b2549] font-bold rounded-t-lg' : 'text-gray-600 border-transparent']"
         @click="currentTab = tab">
        {{ tab }}
      </a>
    </nav>

    <!-- 조건부 렌더링을 사용한 컴포넌트 또는 메시지 표시 -->
    <div v-if="currentTab === '내정보수정'" class="bg-[#f2f4f7]">
      <div v-if="!hasCustomerData">
        <div class="px-20">
          <CommonView/>
        </div>
      </div>
      <!-- 데이터가 있으면 데이터를 표시하는 컴포넌트 렌더링 -->
      <div v-else-if="hasCustomerData">
        <div class="px-20">
          <setting-info-user/>
        </div>
      </div>
    </div>

    <div v-else-if ="currentTab === '고객목록보기'">
      <div v-if="!hasCustomerData">
        <div class="px-20">
          <!-- <CommonView/> -->
        </div>
      </div>
      <div v-else-if="hasCustomerData">
        <div class="px-20">
          <setting-user-list/>
        </div>
      </div>
    </div>
  </common-layout>

</template>

<script>

import SettingInfoUser from '@/components/tabs/SettingInfoUser.vue'
import SettingUserList from '@/components/tabs/SettingUserList.vue'
import CommonLayout from '@/components/layouts/CommonLayout.vue'
// 가정: CommonView 컴포넌트가 존재하고, 이를 가져옵니다.

export default {
  components: {
    SettingInfoUser,
    SettingUserList,
    CommonLayout
  },
  data () {
    return {
      showModal: false,
      currentTab: '내정보수정',
      tabs: ['내정보수정', '고객목록보기'],
      hasCustomerData: true
    }
  }
}
</script>
