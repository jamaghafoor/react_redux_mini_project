import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProducts,
  selectedProducts,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const fetchProductDetail = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  const { id, title, image, price, category, description } = product;

  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src={image} />
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{title}</h3>

              <p className="product-description">{description}</p>
              <h4 className="price">
                current price: <span>${price}</span>
              </h4>
              <p className="vote">
                <strong>category: {category}</strong>
              </p>

              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
