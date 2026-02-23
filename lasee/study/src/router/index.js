// 라우터 정의
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import DataBindingAttributeView from '@/views/1_databinding/DataBindingAttributeView.vue'
import EventChangeView from '@/views/2_event/EventChangeView.vue'
import EventClickView from '@/views/2_event/EventClickView.vue'
import RenderingIfView from '@/views/3_extra/RenderingIfView.vue'
import ComputedView from '@/views/3_extra/ComputedView'
import WatchView from '@/views/3_extra/WatchView'
import SlotView from '@/views/4_reuse/SlotView'

// 라우터 설정
// path : 새 페이지 URL 정의 , name: 라우터 이름 정의  component : 새 페이지 컴포넌트 정의
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/databinding',
    name: 'databinding',
    component: DataBindingAttributeView
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: EventChangeView
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: EventClickView
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView',
    component: RenderingIfView
  },
  {
    path: '/extra/computed',
    name: 'ComputedView',
    component: ComputedView
  },
  {
    path: '/extra/watch',
    name: 'WatchView',
    component: WatchView
  },
  {
    path: '/reuse/slot',
    name: 'slot',
    component: SlotView
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

export default router

// ** 총정리 **
// 이 설정은 라우터 초기화하고 routes 배열을 사용하여 각 경로에 해당하는 뷰 컴포넌트 지정함.
// 설정된 이 라우터는 vue 애플리케이션 인스턴스에 플러그인으로 추가되어 , 애플리케이션 전반에 걸쳐 라우팅 관리 담당
// 이를 통해 spa 에서 사용자의 url 변경에 따라 적절한 컴포넌트 렌더링 가능하도록 구성됨.
