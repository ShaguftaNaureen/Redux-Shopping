import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import GotoCart from "./GotoCart";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addCart(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delCart(product));
      setCartBtn("Add to Cart");
    }
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6 style={{lineHeight:2}}">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className=" text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <div>
              <FaStar />
            </div>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description} </p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            {cartBtn}
          </button>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => <GotoCart />}
          >
            Go to Cart
          </button>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
