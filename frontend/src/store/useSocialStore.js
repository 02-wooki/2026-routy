import { create } from 'zustand';

export const useSocialStore = create((set) => ({
  followingIds: [],
  toggleFollow: (userId) =>
    set((state) => ({
      followingIds: state.followingIds.includes(userId)
        ? state.followingIds.filter((id) => id !== userId)
        : [...state.followingIds, userId],
    })),
}));
