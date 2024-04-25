import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import * as cartInMemory from "./helpers/cart-in-memory";

export type ProductCartProps = ProductProps & {
    quantity: number
}

type StandProps = {
    products: ProductCartProps[]
    add: (product: ProductProps) => void
}

export const useCartStore = create<StandProps>((set) => ({
    products: [],
    add: (product: ProductProps) => set((state) => ({ products: cartInMemory.add(state.products, product) }))
}))