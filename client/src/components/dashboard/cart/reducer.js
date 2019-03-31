// // const cart = cart
// // const item = item
// // const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
// // const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)[0]

// // const addToCart = (cart, item) => {
// //   const cartItem = itemInCart(cart, item)
// //   return cartItem === undefined
// //   ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
// //   : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1}]
// // }

// // const removeFromCart = (cart, item) => {
// //   return item.quantity === 1
// //   ? [ ...cartWithoutItem(cart, item) ]
// //   : [ ...cartWithoutItem(cart, item, { ...item, quantity: item.quantity - 1 })]
// // }

// // const removeAllFromCart = (cart, item) => {
// //   return [ ...cartWithoutItem(cart, item) ]
// // }
// // cart.filter(cartItem => cartItem.id !== item.id)[0]

// // Code for cart function
// const cartReducer = (state=[], action) => {
//   switch(action.type) {

//     case "ADD":
//       // "..." is the spread operator which takes the old array and adds everything to a new array. So in this case everything from state gets put into an array.
//       // action.payload takes item added to cart and adds to cart. 
//       //return addToCart(state, action.payload)
//        return [...state, action.payload]

//     case "REMOVE":
//       // if there are multiple of an item in cart, this will remove first index of an item from cart, not all of the item from cart
//       // return removeFromCart(state, action.payload)
//     // break;
//     return [...state, action.payload]

//     case "REMOVE_ALL":
//     // return removeAllFromCart(state, action.payload)
//       // break;
//       return [...state, action.payload]
//     default:
//     return state;
//     }
// }

// export default cartReducer

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [ ...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [ ...cartWithoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

const cartReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      return addToCart(state, action.payload)

    case 'REMOVE':
      const firstMatchIndex = state.indexOf(action.payload)
      return state.filter((item, index) => index !== firstMatchIndex)

    default:
      return state;
  }
}

export default cartReducer