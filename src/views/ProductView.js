import React, { useEffect, useState } from "react";
import { getProductById } from "../app/productServices";
import { ProductDetail } from "../components/Products/ProductDetail";

export const ProductView = ({match}) => {
    const [productDetail, setProductDetail] = useState(null);

    useEffect( () => {
        const { id } = match.params;
        
        getProductById(id)
        .then((productFromDb)=> setProductDetail(productFromDb))
        .catch((err) => console.log(err))
        
    },[match]);

    return (
        <div>
            { productDetail &&  <ProductDetail item={productDetail} />}
        </div>
    )
}
