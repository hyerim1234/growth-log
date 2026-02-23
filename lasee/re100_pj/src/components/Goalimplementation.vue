<template>
  <div id="container">
    <!-- 템플릿 내용을 추가 -->
    <div class="p-6 bg-white shadow-lg rounded-lg h-[900px]">
      <h1 class="font-bold">목표이행추이</h1>
      <div id="columStackedBar" class="h-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoalImplementation',
  data () {
    return {
      // 여기에 데이터 속성을 추가
    }
  },
  methods: {
    // 차트를 초기화하는 메서드 추가
    columStackedBar () {
      // 차트 색상 지정
      Highcharts.setOptions({
        colors: ['#732ACF', '#34B5AD']
      })

      // Set up the chart
      new Highcharts.Chart({
        chart: {
          renderTo: 'columStackedBar', // 차트가 그려질 태그의 ID 지정
          type: 'column', // 차트 타입 지정
          backgroundColor: '#fff' // 차트 배경색 지정
        },
        credits: { enabled: false }, // Highcharts 워터마크 숨김처리
        title: { // 차트 타이틀
          text: ''
        },
       // 범례
        legend: {
          align: 'center', // 수평 정렬 지정
          verticalAlign: 'top', // 수직 정렬 지정
          layout: 'horizontal', // 레이아웃 가로
          itemStyle: {
            color: '#98A2B3',
            fontSize: '14px',
            fontWeight: '400'
          },
          x: 10, // 가로 위치 지정
          y: 0 // 세로 위치 지정
        },
        xAxis: {
          categories: ['24', '30', '35', '40', '45', '50'],
          labels: {
            format: '{value} 년도',
            style: {
              color: '#98A2B3',
              fontSize: '12px'
            },
          },
          lineColor: '#98A2B3', // x축 선 색상 지정
          lineWidth: 0, // x축 선 두께 지정
          gridLineWidth: 0 // x축의 수직선 없애기
        },
        yAxis: [{
          title: {
            text: ''
          },
          labels: {
            format: '{value} %', // label 포맷
            style: {
              color: '#98A2B3', //y축 범례 텍스트
              fontSize: '12px'
            }
          },
          opposite: false,
          gridLineWidth: 1, // y축의 가로선
          lineWidth: 0, // y축 선 두께 지정
          lineColor: '#cfcfcf' // y축 선 색상 지정
        }],
        plotOptions: {
          column: { // 컬럼 차트 전체 옵션 지정
            stacking: 'normal', // stacked bar 필수 설정 옵션 (default undefined)
            dataLabels: { // 컬럼 바 각각의 label 옵션 지정
              enabled: true,
              style: {
                fontSize: '12px',
                fontWeight: '500',
                textOutline: 0 // label 수치의 outline 제거 0으로 지정
              }
            }
          }
        },
        series: [{
          name: '이행률',
          type: 'line',
          data: [10, 20, 30, 40, 50, 60],
          color: '#444',
          dataLabels: {
            enabled: false // 숫자를 없애기 위해 false로 설정
          }
        }, {
          name: '자가소비',
          data: [8, 7, 3, 8, 5, 10],
          stack: 'completed',
          dataLabels: {
            enabled: false // 숫자를 없애기 위해 false로 설정
          }
        }, {
          name: 'PPA',
          data: [5, 3, 4, 3, 2, 5],
          stack: 'completed',
          dataLabels: {
            enabled: false // 숫자를 없애기 위해 false로 설정
          }
        }, {
          name: 'REC',
          data: [3, 4, 5, 4, 5, 8],
          stack: 'completed',
          dataLabels: {
            enabled: false // 숫자를 없애기 위해 false로 설정
          }
        }, {
          name: '녹색프리미엄',
          data: [2, 2, 2, 2, 2, 4],
          stack: 'completed',
          dataLabels: {
            enabled: false // 숫자를 없애기 위해 false로 설정
          }
        }, {
          name: '지분투자',
          data: [1, 1, 1, 1, 1, 2],
          stack: 'completed',
          dataLabels: {
            enabled: false // 숫자를 없애기 위해 false로 설정
          }
        }]
      })
    }
  },
  mounted() {
    // mounted 훅에서 차트를 초기화하는 메서드를 호출
    this.columStackedBar()
  }
}
</script>

<style scoped>
/* 여기에 스타일을 추가 */
</style>
