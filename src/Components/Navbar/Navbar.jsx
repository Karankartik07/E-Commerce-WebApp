import React, { useContext } from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
function Navbar() {
  const [Assign, setAssign] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>Loot!!On</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setAssign("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {Assign === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setAssign("Men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {Assign === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setAssign("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {Assign === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setAssign("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {Assign === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" className="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
