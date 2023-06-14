import { create } from "zustand";

type Store = {
  orderList: number[];
  addOrder: (item: number) => void;
};

export const useStore = create<Store>((set) => ({
  orderList: [1],
  addOrder: (item: number) =>
    set((state) => ({ orderList: [...state.orderList, item] })),
}));

export const addToList = (newList: number[]) =>
  useStore.setState({ orderList: newList });
