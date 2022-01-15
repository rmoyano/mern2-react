import db from "./db";

export const getProductById = async(id) => {
    const productFromDb = await db.cart.get(Number(id));
    return productFromDb;
}

export const getAllProducts = async() => {
    const allProducts = await db.cart.toArray();
    return allProducts;
}