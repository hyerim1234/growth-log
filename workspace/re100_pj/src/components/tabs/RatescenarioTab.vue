<!-- 이행률 > 시나리오 -->
<template>
  <div class="bg-[#f2f4f7] px-20">
    <div class="grid grid-cols-2 gap-2">
      <div>
        <EneryUserVue />
      </div>
      <div>
        <Goalimplementation />
      </div>
    </div>
  </div>
</template>

<script>

import Goalimplementation from '@/components/Goalimplementation.vue'
import EneryUserVue from '@/components/EneryUser.vue'

export default {
  components: {
    EneryUserVue,
    Goalimplementation
  }
}
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
