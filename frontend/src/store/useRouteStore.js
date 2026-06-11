import { create } from 'zustand';

export const useRouteStore = create((set) => ({
  points: [],
  activeIndex: 0,
  setPoints: (points) => set({ points }),
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
