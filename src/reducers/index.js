import ItemsList from "../JSON/items.json";

const initialState = {
  items: ItemsList,
  cart: [],
  total: 0,
};

export const Reducer = (state = initialState, action) => {
  const shopItem = state.items.find((item) => item.id === action.payload);
  const shopIndex = state.items.indexOf(shopItem);
  const cartItem = state.cart.find((item) => item.id === action.payload);
  const cartIndex = state.cart.indexOf(cartItem);

  const changedItems = [...state.items];
  let changedCart = [...state.cart];

  switch (action.type) {
    case "ADDTOCART": {
      if (cartItem) {
        changedCart[cartIndex].inventory = changedCart[cartIndex].inventory + 1;
      } else {
        const toAdd = state.items.find((item) => item.id === action.payload);
        state.cart.push({ ...toAdd, inventory: 1 });
      }
      changedItems[shopIndex].inventory = changedItems[shopIndex].inventory - 1;
      return (state = { ...state, items: changedItems });
    }
    case "REMOVEONE": {
      if (changedCart[cartIndex].inventory > 1) {
        changedCart[cartIndex].inventory = changedCart[cartIndex].inventory - 1;
      } else {
        changedCart = changedCart.filter((item) => item.id !== action.payload);
      }
      const changedItems = [...state.items];
      changedItems[shopIndex].inventory = changedItems[shopIndex].inventory + 1;
      return (state = { ...state, items: changedItems, cart: changedCart });
    }
    case "REMOVEALL":
      let swap = cartItem.inventory;
      changedItems[shopIndex].inventory =
        changedItems[shopIndex].inventory + swap;
      return {
        ...state,
        items: changedItems,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "CHECKOUT": {
      return state = {...state, cart: []}
    }
    default:
      return state;
  }
};
