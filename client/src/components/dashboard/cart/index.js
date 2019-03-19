import React from "react"
import { connect } from "react-redux"
// import cartReducer from "./reducer"
const sort = (item) => {
  return item.sort((a, b) => a.id < b.id)
}


function Cart(props) {
  return <p>Still in Progress...</p>
  
  //  <table>
  //   <thead>
  //     <tr>
  //       <th key="1">Item</th>
  //       <th key="2">Quantity</th>
  //       <th key="3"></th>
  //       <th key="4"></th>
  //     </tr>
  //   </thead>

  //   <tbody>
  //     {
  //       sort(props.cart).map(item => <tr>
  //         <td key="1">{ item.name }</td>
  //         <td key="2">{ item.quantity }</td>
  //         <td key="3">
  //           <button
  //           onClick={(e) => props.addToCart(item)}
  //           >+</button>
  //         </td>
  //         <td key="4">
  //           <button
  //           onClick={(e) => props.removeFromCart(item)}
  //           >-</button>
  //         </td>
  //         <td key="5">
  //           <button
  //           onClick={(e) => props.removeAllFromCart(item)}
  //           >Empty Cart</button>
  //         </td>
  //       </tr>)
  //     }
  //   </tbody>
  // </table>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: "ADD", payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: "REMOVE", payload: item })
    },
    removeAllFromCart: (item) => {
    dispatch({ type: "REMOVE_ALL", payload: item })
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Cart)
