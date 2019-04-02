// const that defines an empty cart
const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)

// const that defines an item in the cart
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

// const that defines add to cart arrow function
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

// const to remove one item from cart
// const removeItems = (cart, item) => {
//   const cartItem = itemInCart(cart, item)
//   return cartItem === undefined
//     ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
//     : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity - 1 }]
// }

const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload)

    // case 'REMOVE':
    //   return removeItems(state, action.payload)

      case 'REMOVE':
      return state
        .map(item => (item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter(item => item.quantity > 0);

      case 'REMOVE_ALL':
      const emptyCart = state.indexOf(action.payload)
      return state.filter((item, index) => index !== emptyCart)

      
    default:
      return state;
  }
}

export default cartReducer