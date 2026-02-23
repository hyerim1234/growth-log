# RE100 Frontend (Vue 3)

RE100 대시보드 성격의 Vue 3 프로젝트입니다.  
Vue Router, Vuex, Tailwind, Bootstrap, Highcharts를 함께 사용합니다.

## 기술 스택
- Vue 3 (Vue CLI 5)
- Vue Router 4
- Vuex 4
- Tailwind CSS 3
- Bootstrap 5
- Highcharts / highcharts-vue

## 실행 방법
```bash
cd /Users/kanghyerim/Desktop/github_pj/lasee/re100_pj
npm install
npm run serve
```

기본 개발 서버는 `http://localhost:8080`에서 확인할 수 있습니다.

## 빌드/검사
```bash
npm run build
npm run lint
```

## 주요 폴더 구조
```text
src/
  assets/                # 이미지, 아이콘, 스타일 자원
  components/
    layouts/             # 공통 레이아웃(Header/Footer/Common)
    tabs/                # 탭 화면 컴포넌트
    ui/                  # 테이블/모달/폼 등 재사용 UI
  router/                # 라우트 정의 + beforeEach 가드
  store/                 # Vuex 상태(isAuthenticated, currentTab)
  views/                 # 페이지 단위 뷰(Login/Main/Manage/Rate/Setting)
```

## 라우팅 개요
- `/` 로그인
- `/main` 메인 (인증 가드 적용)
- `/common`
- `/rate/compliance`
- `/plant`
- `/manage/arrange`
- `/setting`

## 상태 관리 개요
- `isAuthenticated`: 인증 상태
- `currentTab`: 현재 활성 탭
- 주요 액션: `login`, `logout`, `changeTab`

## 참고 사항
- `plugin/vuetify.js` 파일은 존재하지만 현재 `src/main.js`에서 등록되어 있지 않습니다.
- 인증 상태는 현재 메모리 기반이라 새로고침 시 초기화됩니다.
