import React from "react";

import "./CartItem.styles.scss";

const CartItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart-item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="name">
          {quantity} x ₹{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
