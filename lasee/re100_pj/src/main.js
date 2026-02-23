// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import './index.css'

// createApp(App).use(store).use(router).mount('#app')

// import { createApp } from 'vue';
// import App from './App.vue';
// import store from './store';
// import './index.css';  // 전역 스타일 추가

// const app = createApp(App)
// app.use(store)
// app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // router를 가져옵니다.
import store from './store'
import './index.css' // 전역 스타일 추가

const app = createApp(App)
app.use(store)
app.use(router) // router를 애플리케이션에 등록합니다.
app.mount('#app')
