import { createContext, useState } from "react";
import { useCart } from "../hooks/useCart";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
   const cartData = useCart();
  return(
    <>
    <CartContext.Provider value={cartData}>
        {children}
    </CartContext.Provider>
    </>
  )
};
export default CartProvider
