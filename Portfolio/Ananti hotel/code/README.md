# Ananti Hotel Portfolio (Static Web)

아난티 호텔 콘셉트의 멀티페이지 정적 웹 포트폴리오입니다.

## 기술 스택
- HTML5
- CSS3
- jQuery 1.12.4 (CDN)
- Font Awesome (CDN)

## 실행 방법
정적 페이지이므로 로컬 서버에서 실행하면 가장 안정적입니다.

```bash
cd "/Users/kanghyerim/Desktop/github_pj/Portfolio/Ananti hotel/code"
python3 -m http.server 5600
```

브라우저 접속:
- `http://localhost:5600/html/anantimain.html`

## 페이지 구성
- `html/anantimain.html` 메인
- `html/roomsub1.html`, `html/roomsub.html` 객실
- `html/facilitysub.html` 부대시설
- `html/travelsub.html` 프로모션/트래블
- `html/newssub.html` 뉴스
- `html/eventsub.html` 프로그램/이벤트

## 주요 폴더 구조
```text
html/   # 페이지 파일
css/    # 공통/페이지별 스타일
img/    # 카테고리별 이미지 리소스
js/     # 공통 스크립트(현재 common.js는 비어 있음)
```

## 구현 포인트
- 인라인 jQuery 스크립트로 메뉴 오픈/클로즈 및 hover 인터랙션 구현
- 메인/서브 페이지로 분리된 전통적 멀티페이지 구조
- 이미지 기반 브랜딩 중심 레이아웃

## 유지보수 메모
- 일부 스크립트가 HTML 내 인라인으로 존재해, `js/` 파일 분리 권장
- jQuery 버전이 오래되어 향후 Vanilla JS 또는 최신 라이브러리로 전환 권장
