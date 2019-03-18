import React from "react"
// import product from "../../../data/products.json"
import AddBtn from "./add-btn"
import RemoveBtn from "./remove-btn"

// class ProductListItem extends Component {
//     static defaultProps = { // <-- DEFAULT PROPS
//         product: []       // undefined gets converted to array,render won't trigger error
//     }
//     render() {
//         return <div className="product-list-item">
//         <h3> { product.name } </h3>
//         <img 
//             height={100}
//             title={ props.product.name }
//             src={`/products/${props.product.image}`}
//             alt={ props.product.name }
//         />
//         <div>{ props.product.description }</div>
//         <div>${ props.product.price }</div>
//         <div>
//             <AddBtn
//             cartItem={props.cartItem}
//             product={props.product}
//             addToCart={props.addToCart}
//             />
//         {
//             props.cartItem
//             ? <RemoveBtn
//             cartItem={props.cartItem}
//             product={props.product}
//             removeFromCart={props.removeFromCart}
//             />
//             : null
//         }
            
//         </div>

//     </div>
//     }
// }

// export default ProductListItem

export default function ProductListItem(props) {
    // const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]
    return <div className="product-list-item">
        <h3> { props.product.name } </h3>
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

    </div>
}