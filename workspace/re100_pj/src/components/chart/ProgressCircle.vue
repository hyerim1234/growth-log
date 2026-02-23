<template>
  <div class="rounded-lg">
    <div class="relative  w-1/5 text-black">
      <svg viewBox="0 0 36 36" class=" my-2">
        <!-- 배경 원 -->
        <path class="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none" stroke="#eee" stroke-width="2.8" />

        <!-- 진행 원 -->
        <path class="circle"
          stroke-dasharray="56, 100"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none" stroke="blue" stroke-width="2.8" />
      </svg>
      <span class="absolute top-1/2 left-1/2 transform -translate-x-6 -translate-y-1/2 text-xl font-semibold">56%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressCircle',
  props: {
    percentage: {
      type: Number,
      default: 56
    }
  }
}
</script>
