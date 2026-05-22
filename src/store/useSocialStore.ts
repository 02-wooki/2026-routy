import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  handle: string;
  profileImage: string;
  followerCount: number;
  followingCount: number;
  routeCount: number;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false, // 초기 상태는 로그아웃
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

interface SocialState {
  followingIds: string[];
  toggleFollow: (userId: string) => void;
}

export const useSocialStore = create<SocialState>((set) => ({
  followingIds: [],
  toggleFollow: (userId) => set((state) => ({
    followingIds: state.followingIds.includes(userId)
      ? state.followingIds.filter(id => id !== userId)
      : [...state.followingIds, userId]
  })),
}));
