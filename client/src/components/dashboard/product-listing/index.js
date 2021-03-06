// Dependencies
import React from "react"
import ProductListItem from "./product-list-item"
import { connect } from "react-redux"



 function ProductListing(props) {
    return <div className="product-listing">
        {
            props.products.map( product =>
                <ProductListItem
                key={product.id} 
                product={product}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
                cart={props.cart}
                // cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                />
                )
        }
    </div> 
}

// Function that grabs values from cart state and maps them to cart
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

// Maps actions to store. This will add and remove items from cart. Dispatch is an action onto store. removeFromCart=action, takes an item. arrow function returns JS object, call dispatch to store with a type of add/remove, paylove = item. type & payload imported from reducer file
function mapDispatchToProps(dispatch) {
    return {
    //     loadProducts: (products) => {
    //       dispatch({ type: 'LOAD', payload: products })
    // },
    
        addToCart: (item) => {
            dispatch({ type: "ADD", payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: "REMOVE", payload: item })
        
        }
    }
}
    

// exports first function and passes it through second function
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)