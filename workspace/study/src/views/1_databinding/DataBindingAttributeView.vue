<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
      <div class="flex">
        <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500" v-bind:value="userId" readonly />
        <input type="text" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 mx-2" :value="userId" readonly />
      </div>
      <div class="flex justify-center my-6">
        <img :src="imgSrc" alt="Vue.js logo" class="w-24 h-auto" />
      </div>
      <div class="mb-6">
        <input type="search" class="form-input w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500" v-model="txt1" placeholder="Enter search term" />
      </div>
      <div class="flex justify-center">
        <button class="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 disabled:opacity-50" :disabled="txt1 === ''" @click="search">조회</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: 'hyerim', //사용자 ID 초기값
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png', //이미지 url
      txt1: '' //검색어 데이터 바인딩
    }
  },
  methods: {
    search () {
      //검색 버튼 클릭 이벤트 핸들러
      const result = '검색 결과: ' + this.txt1
      alert(result) //알림으로 결과 표시
    }
  }
}
</script>

<!--  뷰 문법
 `v-bind` 또는 `:`
 데이터와 속성을 동적으로 바인딩
 예시 : v-bind:value="userId"
 축약형인 `:value="userId" `userId` 데이터 속성의 현재 값을 input 요소의 value 속성에 연결.

 v-model : 양방향 데이터 바인딩 생성 , 사용자가 입력 필드에 값을 입력하면 txt1 데이터 속성이 자동으로 업데이트 됨

 @click 또는 v-on:click : 클릭 이벤트 처리
 =>@click = "search"는 사용자가 버튼을 클릭하면 search 메소드 호출함

 computed properties, Watchers, Lifecycle hooks : 뷰 컴포넌트에서 데이터 변화를 감지하거나 특정 시점에 코드를 실행할 수 있게 해주는 다양한 옵션 제공 -->
