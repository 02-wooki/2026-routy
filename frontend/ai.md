# 🚀 프로젝트 루티 (Routy) - Project Charter

## 1. 프로젝트 개요 (Overview)
**루티(Routy)**는 단순한 장소 공유를 넘어, 여행의 **'흐름(Route)'과 '맥락(Context)'**을 공유하는 데이터 기반 여행 동선 SNS입니다.

### 1.1 핵심 가치 (Core Values)
- **Easy Authoring**: EXIF/GPS 데이터를 활용한 자동 동선 생성. 기록의 번거로움 해소.
- **Proof of Visit**: 실제 GPS 데이터 기반의 100% 리얼 여행 인증 (Verified Badge).
- **Interactive Viewer**: 사진 슬라이드와 지도의 실시간 동기화로 몰입감 있는 경험 제공.

## 2. 기술 스택 (Tech Stack)
- **Framework**: React (Vite) + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (실시간 동기화 및 전역 상태 관리)
- **Map Library**: Google Maps API (react-google-maps/api)
- **Icons**: Lucide React
- **Data Parsing**: exifr (EXIF 데이터 추출용)

## 3. 권장 프로젝트 구조 (Folder Structure)
```text
src/
├── api/              # API 호출 및 외부 데이터 연동
├── assets/           # 정적 리소스 (Images, Icons, Global Styles)
├── components/       # 재사용 가능한 UI 컴포넌트
│   ├── common/       # Button, Badge, Modal, Layout
│   ├── feed/         # PhotoFeed, PhotoCard, ScrollObserver
│   └── map/          # RouteMap, CustomMarker, PolylineLayer
├── hooks/            # 커스텀 훅 (useGeolocation, useMapSync 등)
├── pages/            # 페이지 단위 컴포넌트 (MainPage 등)
├── store/            # Zustand Stores (useRouteStore)
├── types/            # TypeScript Interface/Type 정의
├── utils/            # EXIF Parser, Coordinate Helpers, Date Formatters
└── App.tsx           # Entry Point & Routing
```

## 4. 핵심 상태 관리 전략 (State Management)
- **Store**: `useRouteStore`
- **Managed State**:
  - `points`: GPS 좌표, 사진 URL, 설명을 포함한 포인트 배열.
  - `activeIndex`: 현재 뷰어에서 보고 있는 포인트의 인덱스.
- **Interaction Flow**:
  1. `PhotoFeed` 스와이프/스크롤 발생 -> `setActiveIndex` 업데이트.
  2. `RouteMap`에서 `activeIndex` 감시 -> 지도 중심 이동(`panTo`) 및 마커 강조.

## 5. UI/UX 원칙
- **Visual First**: 사진과 지도가 화면의 주인공이 되도록 미니멀한 UI 유지.
- **Smooth Transition**: 지도 이동 및 슬라이드 전환 시 부드러운 애니메이션 적용.
- **Mobile Optimized**: 모든 인터랙션은 모바일 환경(Touch, Swipe)을 최우선으로 고려.

## 6. 개발 로드맵 (Planned Phases)
- **Phase 1**: 환경 세팅 및 메인 인터랙티브 레이아웃 구축.
- **Phase 2**: EXIF 데이터 추출 및 자동 마커 생성 로직 구현.
- **Phase 3**: 피드 상세 및 인증 배지(Verified Badge) 시스템 구현.
- **Phase 4**: 서비스 고도화 및 배포 준비.
