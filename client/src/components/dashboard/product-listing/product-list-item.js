import React from "react"
import AddBtn from "./add-btn"
import RemoveBtn from "./remove-btn"

export default function ProductListItem(props) {
    const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    console.log(thisItemInCart);
    return <div className="product-list-item">
        <h4> { props.product.name } </h4>
        <img 
            height={100}
            title={ props.product.name }
            src={`/products/${props.product.image}`}
            alt={ props.product.name }
        />
        <div>{ props.product.description }</div>
        <div>${ props.product.price }</div>
        <div>
            <AddBtn
            cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart}
            />
        {
            props.cartItem
            ? <RemoveBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
            />
            : null
        }
            
        </div> 
        <div>
            <button onClick={()=> props.addToCart(props.product) }>
            Add To Cart ({
                        thisItemInCart && thisItemInCart.quantity || 0
    })</button>
        </div>

    </div>
}