import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const GotoCart = () => {
  const state = useSelector((state) => state.addCart);
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2">
        <span className="fa fa-shopping-cart ms-1"></span> Cart ({state.length})
      </NavLink>
    </>
  );
};

export default GotoCart;
