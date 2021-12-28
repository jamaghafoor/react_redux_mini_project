import { ActionsTypes } from "../constants/action-types";

export const setProducts = (products) =>{
    return{
        type: ActionsTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (product) =>{
    return{
        type: ActionsTypes.SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeSelectedProducts = (product) =>{
    return{
        type: ActionsTypes.REMOVE_SELECTED_PRODUCTS,
    }
}