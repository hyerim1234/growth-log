// 라우터 정의
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import CommonView from '@/views/manage/CommonView.vue'
import ComplianceRateView from '@/views/rate/ComplianceRateView.vue'
import PlantAlloView from '@/views/manage/PlantAlloView.vue'
import ArrangePlantView from '@/views/manage/ArrangePlantView.vue'
import SettingView from '@/views/setting/SettingView.vue'

// 라우터 설정
// path : 새 페이지 URL 정의 , name: 라우터 이름 정의  component : 새 페이지 컴포넌트 정의
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
    meta: { requiresAuth: true }
  },

  {
    path: '/common',
    name: 'common',
    component: CommonView
  },

  {
    path: '/rate/compliance',
    name: 'compliance',
    component: ComplianceRateView
  },
  {
    path: '/plant',
    name: 'plant',
    component: PlantAlloView
  },
  {
    path: '/manage/arrange',
    name: 'arrange',
    component: ArrangePlantView
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingView
  }
]

// 라우터 설정 및 초기화
// createRouter 함수 : 라우터 인스턴스 생성하는 역할 구성 객체 인수로 받음
// history : createWebHistory(process.env.BASE_URL) : 히스토리와 히스토리 모드 설정
// process.env.BASE_URL : 애플리케이션의 기본 url 설정하는 환경 변수
const router = createRouter({
  // createWebHistory 함수는 html5 history api를 사용하여 url 조작하고 , 페이지 리로드 하지 않고 네비게이션 관리함
  history: createWebHistory(process.env.BASE_URL),
  // 앞서 정의한 라우트 설정 배열 : 각 url 경로와 해당 경로에 사용할 컴포넌트 매핑되어있음
  routes
})

// 라우터 가드 설정
router.beforeEach((to, from, next) => {
  // 이동하려는 라우트(to)가 'requiresAuth' 메타 필드를 가지고 있는지 확인함
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 사용자가 인증되지 않은 경우
    if (!store.getters.isAuthenticated) {
      // 로그인 페이지로 리디렉션함
      next({ name: 'login' })
    } else {
      // 인증된 경우 요청한 페이지로 이동을 허용함
      next()
    }
  } else {
    // 'requiresAuth' 메타 필드가 없는 경우 이동을 허용함
    next()
  }
})

export default router
