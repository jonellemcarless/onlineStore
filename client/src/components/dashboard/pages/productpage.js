import React, { Component } from "react";
import ProductListing from "../product-listing/index"
import data from "../../../data/products.json"


class ProductPage extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign">
        <div className="row">
          <div className="col s12 center-align">
            <ProductListing products={data.products} />
          </div>
        </div>
      </div>
    );
  }
}
export default ProductPage;



// export default function ProductPage(_props) {
//   return <div>
//     <h1>Product Page</h1>
//     <ProductListing products={data.products} />
//     </div>
// }

// export default ProductPage;
