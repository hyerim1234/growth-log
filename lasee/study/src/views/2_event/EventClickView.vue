<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <button
      @click="increaseCounter"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline transform hover:-translate-y-1 hover:scale-110"
    >
      Add 1
    </button>
    <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-6 text-center text-gray-800">
      {{ counter }}
    </p>
  </div>
</template>

<script>
//vue 컴포넌트 정의
export default {
  components: {},
  // 컴포넌트 데이터 정의
  data() {
    return {
      // 데이터 속성 초기화
      counter: 0
    }
  },
  methods: {
    // increaseCounter 메서드 정의
    increaseCounter() {
      this.counter += 1 //this.counter 속성에 1씩 증가
    }
  }
}
</script>
<!-- created: 컴포넌트가 생성된 후 데이터나 메서드에 접근할 수 있지만, DOM은 아직 마운트되지 않은 상태입니다. 데이터 초기화나 API 호출 등 초기 설정이 필요할 때 사용합니다. -->
<!-- mounted: 컴포넌트가 DOM에 마운트되고 첫 렌더링이 끝난 직후 호출됩니다. DOM을 조작하거나 외부 라이브러리를 연동할 때 사용합니다. -->
<!-- unmounted: 컴포넌트가 제거되기 직전에 호출됩니다. 이벤트 리스너 제거나 타이머 정리 같은 청소 작업을 수행합니다. -->
