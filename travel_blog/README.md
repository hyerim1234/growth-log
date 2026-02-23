# Travel Blog (Static Frontend)

브런치 스타일의 여행 콘텐츠 메인/슬라이드/탭 UI를 구현한 정적 프론트엔드 프로젝트입니다.

## 기술 스택
- HTML5
- CSS3 / SCSS
- Vanilla JavaScript
- Swiper.js (CDN)
- Tailwind CSS (CDN 런타임)

## 실행 방법
상대경로 이미지와 스크립트가 많아 로컬 서버 실행을 권장합니다.

```bash
cd /Users/kanghyerim/Desktop/github_pj/travel_blog
python3 -m http.server 5500
```

브라우저에서 아래 주소로 확인:
- `http://localhost:5500/html/index.html`
- `http://localhost:5500/html/slide.html`
- `http://localhost:5500/html/slide2.html`
- `http://localhost:5500/html/tab.html`

## 주요 구조
```text
html/      # 페이지 엔트리(index, tab, slide)
css/       # 컴파일 결과 + SCSS 원본
js/        # 페이지 인터랙션 로직
source/    # 이미지/아이콘 에셋
.history/  # 에디터 히스토리(실서비스 배포 제외 권장)
```

## 구현 포인트
- Swiper 기반 카드 슬라이더 및 커스텀 페이지네이션
- 탭 전환(요일/카테고리) 및 정렬 UI
- 더미 데이터 기반 카드 렌더링
- 반응형 스타일링(Tailwind 유틸리티 + 커스텀 CSS)

## 유지보수 메모
- `js/index.js` 내 정렬 탭 이벤트 로직이 중복 선언되어 있어 정리 권장
- `.history` 폴더는 용량이 커서 git 관리 대상 제외 권장
