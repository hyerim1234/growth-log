// createStore 라는 함수를 받아와서 거기에 정의할 수 있는 오브젝트가 state,getter,mutation,action
// vx란? 상태 관리 패턴 라이브러리 모든 컴포넌트를 위한 중앙 집중식 스토어를 제공해준다.
// 상태가 예측 가능한 방식으로 변경될 수 있도록 하는 규ㅣㄱ과 함께 애플리케이션의 모든 구성 요소에 대한 중앙 집중식 저장소 역할을 한다.
// 중앙 저장소에 저장된 데이터는 쉽게 바꿀 수 없으며 특정 함수 mutation action 에서만 데이터 변경이 가능하고 변경 상태 관리 가능함.

// import { createStore } from 'vuex'

// const store = createStore({
//   state: {
//     currentTab: '실시간 정보'
//   },
//   mutations: {
//     setTab (state, tab) {
//       state.currentTab = tab
//     }
//   },
//   actions: {
//     changeTab ({ commit }, tab) {
//       commit('setTab', tab)
//     }
//   },
//   getters: {
//     currentTab: state => state.currentTab
//   }
// })

// export default store
import { createStore } from 'vuex'

// Vuex 스토어 생성
const store = createStore({
  // 상태 정의
  state: {
    isAuthenticated: false, // 로그인 상태를 저장 (false: 로그인되지 않음, true: 로그인됨)
    currentTab: '실시간 정보' // 현재 활성화된 탭을 저장
  },
  // 상태 변경을 정의하는 뮤테이션
  mutations: {
    // currentTab 상태를 변경하는 뮤테이션
    setTab (state, tab) {
      state.currentTab = tab
    },
    // isAuthenticated 상태를 true로 변경하여 사용자 인증 상태로 설정
    authenticate (state) {
      state.isAuthenticated = true
    },
    // isAuthenticated 상태를 false로 변경하여 사용자 비인증 상태로 설정
    logout (state) {
      state.isAuthenticated = false
    }
  },
  // 비동기 작업을 처리하는 액션
  actions: {
    // 탭 변경을 처리하는 액션
    changeTab ({ commit }, tab) {
      commit('setTab', tab)
    },
    // 로그인 처리를 위한 액션 (isAuthenticated를 true로 설정)
    login ({ commit }) {
      commit('authenticate')
    },
    // 로그아웃 처리를 위한 액션 (isAuthenticated를 false로 설정)
    logout ({ commit }) {
      commit('logout')
    }
  },
  // 상태를 가져오는 게터
  getters: {
    // 현재 활성화된 탭을 반환
    currentTab: state => state.currentTab,
    // 사용자 인증 상태를 반환
    isAuthenticated: state => state.isAuthenticated
  }
})

export default store
