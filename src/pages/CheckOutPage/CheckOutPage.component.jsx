import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem.component";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton.component";

import "./CheckOutPage.styles.scss";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Product</div>
      <div className="header-block">Description</div>
      <div className="header-block">Quatity</div>
      <div className="header-block">Price</div>
      <div className="header-block">Remove</div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">Total: ₹{total}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 09/24 - CVV: 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
