import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
const ProductList = () => {
  const dispatch = useDispatch();
const products = useSelector((state) => state)
  const fetchPrducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchPrducts();
  }, []);


  return (
    <div className="ui grid container">
      <ProductComponent></ProductComponent>
    </div>
  );
};
export default ProductList;
