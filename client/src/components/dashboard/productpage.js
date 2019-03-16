import React from "react";

import ProductListing from "../../features/product-listing"

import data from "../../data/products.json"

export default function ProductPage(_props) {
  return <div>
    <h1>Product Page</h1>
    <ProductListing products={data.products} />
    </div>
}

// export default ProductPage;
