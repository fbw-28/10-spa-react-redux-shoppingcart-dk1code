import React from 'react'
import {useSelector} from "react-redux"
import ProdListItem from './ProdListItem'

export default function ProductList() {
    const items = useSelector(state => state.items)
    return (
      <ul>
        {items.map((item) => (
          <ProdListItem
            key={`shop${item.id}`}
            id={item.id}
            title={item.title}
            price={item.price}
            inventory={item.inventory}
          />
        ))}
      </ul>
    );
}
