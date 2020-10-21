import React from "react";
import { useDispatch } from "react-redux";
import { removeOne, removeAll } from "../reducers/Actions";

export default function ShopCartItem({ id, title, price, amount }) {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>
        {title} | ${price} | {amount}
      </h2>
      <div>
        <button onClick={() => dispatch(removeOne(id))}>Remove One</button>
        <button onClick={() => dispatch(removeAll(id))}>Remove All</button>
      </div>
    </li>
  );
}
