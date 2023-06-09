import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.images} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="btn"
              onClick={() => dispatch(remove(product.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
