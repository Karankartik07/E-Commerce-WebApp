import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="productdisplay-img">
          <img className="main-img" src={product.image} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(123)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-right-discription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          vitae ipsum beatae at, odit fuga rerum ut nihil ullam debitis?
        </div>
        <div className="display-right-size">
          <h1>Select Size</h1>
          <div className="display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="right-category">
          <span className="weightInc">Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="right-category">
          <span className="weightInc">Tags :</span> Modern, High Quality Fabric
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
