import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartAmount, setCartAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (price) => {
    const newPrice = totalPrice + price;
    setTotalPrice(newPrice);
    setCartAmount(cartAmount + 1);
  };

  return (
    <CartContext.Provider value={{ addToCart, totalPrice, cartAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
