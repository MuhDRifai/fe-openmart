import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" style={{ height: "19px" }} />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>IDR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="Link" to="/products/1">Woman</Link>
          </div>
          <div className="item">
            <Link className="Link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="Link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="Link" to="/">OPENMART</Link>
        </div>
        <div className="right">
        <div className="item">
          <Link className="Link" to="/">Home Page</Link>
        </div>
        <div className="item">
          <Link className="Link" to="/">About</Link>
        </div>
        <div className="item">
          <Link className="Link" to="/">Contact</Link>
        </div>
        <div className="item">
          <Link className="Link" to="/">Stores</Link>
        </div>
        <SearchIcon/>
        <PersonOutlineIcon/>
        <FavoriteBorderIcon/>
        <div className="cartIcon">
        <ShoppingCartOutlinedIcon/>
        <span>0</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
