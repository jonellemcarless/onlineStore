//import React from "react"

import React, { Component } from "react"



 
// class AddBtn extends Component {
//   addToCartPlus = (props) => { 
//     console.log(props);
//   };

//   render() {
//     return (<button
//     onClick = {() => this.addToCartPlus(this.props.product)}
//     >Add to Cart ({
//     (this.props.cartItem && this.props.cartItem.quantity) || 0
//     })</button> );
//   }
// }

//export default AddBtn;
       
export default function AddBtn(props) {
  if (props.product.quantity !== 0) {

  }
  return <button
  className="btn waves-effect waves-light hoverable light-green darken-4"
  onClick = {() => props.addToCart(props.product)}
  //onClick = {this.addToCartPlus}
  >Add to Cart ({
    (props.cartItem && props.cartItem.quantity) || 0
    })</button> 
}       
       