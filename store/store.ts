import { create } from "zustand";

type Store = {
  orderList: object[];
  addOrder: (item: object) => void;
};

export const useStore = create<Store>((set) => ({
  orderList: [],
  addOrder: (item) =>
    set((state) => ({ orderList: [...state.orderList, item] })),
}));

// export const addToList = (newList: number[]) =>
//   useStore.setState({ orderList: newList });
