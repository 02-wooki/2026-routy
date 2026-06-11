import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false, // 초기 상태는 로그아웃
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export const useSocialStore = create((set) => ({
  followingIds: [],
  toggleFollow: (userId) => set((state) => ({
    followingIds: state.followingIds.includes(userId)
      ? state.followingIds.filter(id => id !== userId)
      : [...state.followingIds, userId]
  })),
}));
