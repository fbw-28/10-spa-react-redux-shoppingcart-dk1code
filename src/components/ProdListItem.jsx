import React from "react";
import { useDispatch } from "react-redux"
import {addToCart} from "../reducers/Actions"

export default function ProdListItem({ id, title, price, inventory }) {
  const dispatch = useDispatch();
  return (
    <li>
      <h2>
        {title} | ${price} {inventory > 0 ? `| ${inventory}x` : null}
      </h2>
      {inventory > 0 ? (
        <button onClick={() => dispatch(addToCart(id))}>Add to cart</button>
      ) : (
        <button disabled>Sold out</button>
      )}
    </li>
  );
}
