<template>
  <nav class="bg-[#0b2249] h-[354px] text-white-100">
    <div class="max-w-full mx-auto flex justify-between items-center px-20 pt-14">
      <!-- logo & brand name -->
      <div class="flex itemss-center space-x-4 font-semibold">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="re100 logo">
        <span class="text-xl font-semibold">RE100 관리자 페이지</span>
        <ul>
          <li>
            <a href="#" :class="tabClass('실시간정보')" @click="selectTab('실시간 정보')">실시간 정보</a>
          </li>
          <li>
            <a href="#" :class="tabClass('이행률')" @click="selectTab('이행률')">
              이행률
            </a>
          </li>
          <li>
            <a href="#" :class="tabClass('관리')" @click="selectTab('관리')">
              관리
            </a>
          </li>
          <li>
            <a href="#" :class="tabClass('설정')" @click="selectTab('설정')">
              설정
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  props: ['selectTab'],
  data () {
    return {
      currentTab: '실시간 정보',
      showMenu: false,
      tabs: ['실시간 정보', '이행률', '관리', '설정']
    }
  }
}
</script>

<style>

</style>
