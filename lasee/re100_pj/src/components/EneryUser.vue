<template>
  <div class="p-4 bg-white shadow-md rounded-lg">
    <!-- 상단 RE100 시나리오 섹션 -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-bold">RE100 시나리오</h2>
      <button class="text-sm text-blue-500 border border-blue-500 rounded px-3 py-1 transition">
        조건 설정
      </button>
    </div>
    <div class="bg-white-25 border rounded-md p-4">
      <ul class="gap-2 grid grid-cols-3 mb-4">
        <li class="grid grid-cols-2">
          <span class="text-gray-500">참여년도</span>
          <span class="text-md text-gray-900">2022년</span>
        </li>
        <li class="grid grid-cols-2">
          <span class="text-gray-500">이행목표율</span>
          <span class="text-md">100%</span>
        </li>
        <li class="grid grid-cols-2">
          <span class="text-gray-500">이행목표년도</span>
          <span class="text-md">2050년</span>
        </li>
      </ul>
      <ul class="gap-2 grid grid-cols-3">
        <li class="grid grid-cols-2">
          <span class="text-gray-500">현재 이행률</span>
          <span class="text-md">12.2%</span>
        </li>
        <li class="grid grid-cols-2">
          <span class="text-gray-500">필요 재생에너지</span>
          <span class="text-md">연 3,800MW</span>
        </li>
        <li class="grid grid-cols-2">
          <span class="text-gray-500">예상 이행비용</span>
          <span class="text-md">약 34,000만원</span>
        </li>
      </ul>
    </div>

    <!-- 재생에너지 사용량 -->
    <h2 class="text-lg font-bold mt-8 mb-6">재생에너지 사용량</h2>
    <div class="2">
      <div v-for="(item, index) in items" :key="index" class="p-4 border-b">
        <div class="flex justify-between items-center mb-2">
          <!-- <span class="font-semibold">{{ item.title }}</span> -->
          <span :class="item.bgClass + ' font-semibold'">{{ item.title }}</span>
          <span class="text-gray-500 text-sm relative top-[40px]">단가 278.1원/MW</span>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-2">
          <div class="grid grid-cols-2">
            <span class="text-gray-500">이행률</span>
            <span class="text-lg font-bold block w-20 ">{{ item.rate }}%</span>
            <span class="text-gray-500">이행비용</span>
            <span class="text-lg font-bold block w-20">{{ item.cost }}억원</span>
          </div>

          <div class="relative right-[90px] top-3">
            <span :class="item.colorClass + ' text-white-100 px-2 rounded-full relative'">{{ item.capacity }} MW</span>
            <div class="h-2 bg-gray-200 rounded-full overflow-hidden w-[510px]">
              <div class="h-full" :class="item.colorClass" :style="{ width: item.width + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RE100Scenario',
  data () {
    return {
      items: [
        { title: '자가소비', rate: 42.4, cost: 2.4, capacity: 948.8, width: 42.4, colorClass: 'bg-purple-800 font-bold  top-4 left-40', bgClass:'bg-white text-purple-800' },
        { title: 'PPA', rate: 35.6, cost: 1.8, capacity: 800.3, width: 35.6, colorClass: 'bg-green-500 font-bold  top-4 left-32', bgClass:'bg-white text-green-500' },
        { title: 'REC', rate: 18.9, cost: 0, capacity: 0.0, width:0, colorClass: 'bg-lime-600 font-bold  top-4 left-0', bgClass:'bg-white text-lime-600' },
        { title: '녹색프리미엄', rate: 18.9, cost: 0, capacity: 0.0, width:0, colorClass: 'bg-yellow-500 font-bold  top-4 left-0',bgClass:'bg-white text-yellow-500' },
        { title: '지분투자', rate: 18.9, cost: 0, capacity: 0.0, width:0 , colorClass: 'bg-orange-500 font-bold  top-4 left-0', bgClass:'bg-white text-orange-500 border-b-0' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
