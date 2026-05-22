import type { RoutePoint } from '../store/useRouteStore';

export interface MockRoute {
  id: string;
  userId: string;
  userName: string;
  userHandle: string;
  userImage: string;
  title: string;
  points: RoutePoint[];
}

export const MOCK_ROUTES: MockRoute[] = [
  {
    id: 'route-1',
    userId: 'user-1',
    userName: '니혼진데스',
    userHandle: '@nihon_jin',
    userImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    title: '오사카 성 투어',
    points: [
      { id: 'p1', lat: 34.6873, lng: 135.5262, photoUrl: 'https://images.unsplash.com/photo-1590559899731-a382839e5549', description: '오사카 성 입구' },
      { id: 'p2', lat: 34.6850, lng: 135.5290, photoUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9', description: '글리코상 앞에서 한 컷' },
    ]
  },
  {
    id: 'route-2',
    userId: 'user-2',
    userName: '여행가영',
    userHandle: '@travel_young',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    title: '교통 핫플레이스 탐방',
    points: [
      { id: 'p3', lat: 35.0116, lng: 135.7681, photoUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e', description: '교토 기요미즈데라' },
    ]
  },
  {
    id: 'route-3',
    userId: 'user-3',
    userName: '부산싸나이',
    userHandle: '@busan_man',
    userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    title: '광안리 해변 산책',
    points: [
      { id: 'p4', lat: 35.1532, lng: 129.1189, photoUrl: 'https://images.unsplash.com/photo-1596402184320-417d7178b2cd', description: '광안대교 야경' },
    ]
  }
];
