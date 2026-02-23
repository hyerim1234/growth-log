<template>
    <div class="progress-circle bg-white shadow-md p-4 rounded-lg">
      <div class="relative">
        <svg viewBox="0 0 36 36" class="circular-chart">
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
        <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold">56%</span>
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
  
  <style scoped>
  .circular-chart {
    width: 100%;
    max-width: 150px; /* 원하는 크기 조정 */
  }
  .circle-bg {
    stroke: #eee; /* 배경 색상 */
  }
  .circle {
    transition: stroke-dasharray 0.6s ease; /* 애니메이션 효과 */
  }
  </style>
  