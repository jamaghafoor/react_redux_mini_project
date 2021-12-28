import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} />
              </div>
              <div className="content">
                <li className="header">{title}</li>
                <div className="meta">
                  <span className="date">{price}</span>
                </div>
                <div className="description">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return renderList;
};
export default ProductComponent;