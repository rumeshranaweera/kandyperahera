import { create } from "zustand";

type Store = {
  orderList: Product[];
  addOrder: (item: Product) => void;
  clearCart: () => void;
  removeItem: (id: number) => void;
};

export const useStore = create<Store>((set) => ({
  orderList: [],
  addOrder: (item: Product) =>
    set((state) => ({ orderList: [...state.orderList, item] })),
  clearCart: () => set(() => ({ orderList: [] })),
  removeItem: (index) => {
    set((state) => {
      let temp = [...state.orderList];
      temp.splice(index, 1);
      console.log(temp);

      return { orderList: temp };
    });
  },
}));

// export const addToList = (newList: number[]) =>
//   useStore.setState({ orderList: newList });
