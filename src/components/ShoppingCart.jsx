import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {checkout} from "../reducers/Actions"

import ShopCartItem from "./ShopCartItem";

export default function ShoppingCart() {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch()
  
  const total = cart.reduce((acc, item) => {
    acc += item.price * item.inventory
    return acc
} ,0)
  return (
    <div>
      <ul>
        {cart.map((item) => (
          <ShopCartItem
            key={`cart${item.id}`}
            id={item.id}
            title={item.title}
            price={item.price}
            amount={item.inventory}
          />
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={() => dispatch(checkout())}>Checkout</button>
    </div>
  );
}
