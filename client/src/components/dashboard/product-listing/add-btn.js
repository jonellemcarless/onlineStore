import React from "react"

// import React, { Component } from "react"

// class AddBtn extends Component {
//   render() {
//     return (<button
//     onClick = {() => props.addToCart(props.product)}
//     >Add to Cart ({
//     (props.cartItem && props.cartItem.quantity) || 0
//     })</button> );
//   }
// }

// export default AddBtn;
       
export default function AddBtn(props) {
  if (props.product.quantity !== 0) {

  }
  return <button
  className="btn waves-effect waves-light hoverable light-green darken-4"
  onClick = {() => props.addToCart(props.product)}
  >Add to Cart ({
    (props.cartItem && props.cartItem.quantity) || 0
    })</button> 
}       
       