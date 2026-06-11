import { create } from 'zustand';

export interface RoutePoint {
  id: string;
  lat: number;
  lng: number;
  photoUrl: string;
  description: string;
  timestamp?: number;
}

interface RouteState {
  points: RoutePoint[];
  activeIndex: number;
  setPoints: (points: RoutePoint[]) => void;
  setActiveIndex: (index: number) => void;
}

export const useRouteStore = create<RouteState>((set) => ({
  points: [],
  activeIndex: 0,
  setPoints: (points) => set({ points }),
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
