# github_pj Workspace Guide + Repository Analysis

이 저장소는 여러 프론트엔드 프로젝트를 모아둔 워크스페이스입니다.

## 문서
- RE100 Vue 프로젝트: `/Users/kanghyerim/Desktop/github_pj/lasee/re100_pj/README.md`
- Travel Blog 정적 프로젝트: `/Users/kanghyerim/Desktop/github_pj/travel_blog/README.md`
- Ananti Hotel 정적 프로젝트: `/Users/kanghyerim/Desktop/github_pj/Portfolio/Ananti hotel/code/README.md`

## 빠른 이동
- Vue SPA 실행: `cd /Users/kanghyerim/Desktop/github_pj/lasee/re100_pj && npm install && npm run serve`
- Travel Blog 실행: `cd /Users/kanghyerim/Desktop/github_pj/travel_blog && python3 -m http.server 5500`
- Ananti Hotel 실행: `cd "/Users/kanghyerim/Desktop/github_pj/Portfolio/Ananti hotel/code" && python3 -m http.server 5600`

---

## 1) 저장소 개요
이 저장소는 **단일 서비스가 아니라 다수의 프론트엔드 학습/포트폴리오 프로젝트를 한 폴더에 모아둔 형태**입니다.

- 루트 프로젝트 수: 11개 디렉터리
- 성격: 정적 웹(HTML/CSS/JS), Vue 3 기반 SPA, UI 실습/샘플 혼합
- 백엔드 코드: 확인되지 않음 (프론트엔드 중심)

## 2) 최상위 파일 구조 (요약)

| 디렉터리 | 성격 | 주요 기술/특징 | 상태 요약 |
|---|---|---|---|
| `Portfolio/Ananti hotel/code` | 호텔 사이트 포트폴리오 | HTML/CSS, jQuery 1.12.4, Font Awesome | 페이지/스타일 완성도 높음, JS는 인라인 중심 |
| `travel_blog` | 여행 블로그 UI 프로젝트 | HTML/CSS/SCSS/JS, Swiper, Tailwind CDN | 인터랙션 다양, 일부 중복 로직 존재 |
| `lasee/re100_pj` | Vue 3 앱 프로젝트 | Vue CLI, Vue Router, Vuex, Tailwind, Bootstrap, Highcharts | 구조화된 SPA, 인증/상태 관리 기본 구현 |
| `lasee/study` | Vue 학습 프로젝트 | Vue CLI, Router, Vuex, Tailwind, Bootstrap, Highcharts | 학습용 라우트/컴포넌트 풍부 |
| `lasee/vite-project` | Vue 3 + Vite 템플릿 | Vite, Vue 3, Tailwind | 기본 템플릿 수준 |
| `lasee` (root) | Vue CLI 기본 템플릿 | Vue 3, Tailwind | 초기 템플릿 상태 |
| `photozip` | 미니 웹 실습 | 순수 JS DOM 이벤트 | 이벤트/클래스 토글 실습 |
| `mybucketlist` | 정적 페이지 | HTML/CSS | 단일 페이지 |
| `git` | Git 실습 샘플 | 간단 HTML/CSS/JS | 데모/테스트 용도 |
| `desktop-tutorial`, `study` | 튜토리얼/초기 학습 폴더 | README/단일 파일 위주 | 실코드 적음 |
| `2025_portfolio`, `hakit_*` | 에셋/보관성 폴더 | 이미지/리소스 위주 | 코드 적거나 미확인 |

## 3) 코드 규모 (실코드 기준)
`.history`, `*.map`, 이미지 제외 기준으로 집계

| 경로 | 소스 파일 수 | 소스 라인 수(대략) |
|---|---:|---:|
| `Portfolio` | 16 | 4,822 |
| `lasee` | 115 | 4,766 |
| `travel_blog` | 14 | 2,465 |
| `photozip` | 3 | 155 |
| `mybucketlist` | 2 | 93 |
| `git` | 3 | 16 |

참고: `travel_blog/.history` 폴더가 매우 커서, 포함 시 통계가 과대계상됩니다.

## 4) 기술 역량 분석

### A. 프론트엔드 마크업/스타일링
- HTML/CSS 기반 다중 페이지 제작 능력 보유
- 반응형/레이아웃 설계 경험 확인 (`travel_blog`, `Portfolio`)
- SCSS 사용 경험 확인 (`travel_blog/css/index.scss`)
- Tailwind 사용 경험 확인 (CLI 방식 + CDN 방식 혼용)

### B. JavaScript 인터랙션
- DOM 조작, 이벤트 바인딩, 클래스 토글 구현 능력 확인
- Swiper 기반 캐러셀/탭/정렬 UI 구현 경험 확인
- jQuery 기반 메뉴/애니메이션 구현 경험 확인

### C. Vue 생태계
- Vue 3 + Vue Router + Vuex 조합 사용 경험 확인
- 컴포넌트 분리 및 라우팅 구조 설계 경험 확인
- Vue CLI와 Vite 모두 경험
- 상태 관리(탭/인증 상태), 라우터 가드 구현 경험

### D. 시각화/외부 라이브러리
- Highcharts 사용 흔적 확인 (`lasee/re100_pj`, `lasee/study`)
- Bootstrap/Tailwind 병행 사용 경험

### E. 협업/운영 관점 역량 (추정)
- 다수 프로젝트 병렬 관리 경험은 있으나,
- 공통 규약(모노레포 워크스페이스, 공통 린트/빌드 파이프라인)까지는 아직 약한 편

## 5) 코드 구조/품질 분석

### 강점
1. **프로젝트 스펙트럼이 넓음**
- 정적 페이지부터 Vue SPA까지 단계적으로 확장됨.

2. **컴포넌트 단위 분리 습관 존재**
- `lasee/re100_pj/src/components/...` 구조가 비교적 체계적.

3. **라우터 + 스토어 + UI 컴포넌트 조합 사용**
- SPA 기본 아키텍처 이해도 확인 가능.

### 주요 리스크/개선 포인트
1. **오래된 의존성 사용 (보안/유지보수 리스크)**
- `Portfolio/Ananti hotel/code/html/anantimain.html` 등에서 `jQuery 1.12.4` CDN 사용.

2. **중복 로직 존재 (유지보수성 저하)**
- `travel_blog/js/index.js`에 정렬 탭 이벤트 바인딩이 중복 선언되어 있음.

3. **클라이언트 인증 상태가 메모리 기반으로 단순화됨**
- `lasee/re100_pj/src/store/index.js`의 `isAuthenticated`는 새로고침 시 소실되고 서버 검증 연계가 없음.

4. **Axios 사용 흔적 대비 의존성/플러그인 설정 불명확**
- `lasee/study/src/views/LoginView.vue`에서 `this.$axios` 사용.
- `package.json`에서 axios 의존성이 보이지 않음.

5. **사용되지 않거나 연결되지 않은 코드 존재 가능성**
- `lasee/re100_pj/plugin/vuetify.js`, `lasee/study/plugin/vuetify.js` 존재하나 메인 등록 흐름에서 미확인.

6. **문서화 부족**
- 주요 Vue 프로젝트의 README가 템플릿 수준이라 실제 실행/구성/아키텍처 설명이 부족.

## 6) 프로젝트 성숙도 진단

- **포트폴리오/UI 표현력**: 중상
- **프론트엔드 프레임워크 활용(Vue)**: 중
- **아키텍처 일관성/운영성**: 중하
- **문서화/재현성**: 하

즉, 화면 구현 역량은 분명하고, 서비스형 코드베이스로 확장하기 위해선
`환경 표준화 + 인증/데이터 흐름 정교화 + 문서화`를 보완하는 단계입니다.

## 7) 권장 정리 로드맵 (우선순위)

### 1순위: 실행 가능성/재현성 확보
- 각 주요 프로젝트(`lasee/re100_pj`, `travel_blog`, `Portfolio`)에
  - 실행 방법
  - 폴더 구조
  - 사용 라이브러리
  - 담당 기능
  를 적은 README 추가

### 2순위: 코드 정리
- `travel_blog/js/index.js` 중복 이벤트 바인딩 제거
- 인라인 스크립트를 파일로 분리(특히 `Portfolio/Ananti hotel/...`)
- 미사용 파일/폴더(`.history`, 중복 산출물) 정리 정책 수립

### 3순위: 아키텍처 고도화
- 인증 상태를 토큰 기반 + 영속 저장소(localStorage/sessionStorage) + 만료 검증 흐름으로 전환
- HTTP 클라이언트(axios) 설정을 `src/services` 등으로 중앙화
- UI 프레임워크(Tailwind/Bootstrap/Vuetify) 혼용 기준 수립

### 4순위: 품질 자동화
- ESLint 규칙 강화, Prettier 통합
- 프로젝트별 최소 빌드/린트 스크립트 검증

## 8) 결론
이 저장소는 **프론트엔드 구현 역량(레이아웃/인터랙션/Vue SPA) 포트폴리오로 충분히 강점**이 있습니다.
다만 현재는 다중 실습 프로젝트가 혼재해 있어, 실무형 저장소로 보이려면
**구조 표준화(문서/빌드/의존성/상태관리 기준)**가 다음 핵심 과제입니다.
