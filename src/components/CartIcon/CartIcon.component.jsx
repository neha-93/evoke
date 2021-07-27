import React from "react";
import { connect } from "react-redux";
import { toggleCarthidden } from "../../redux/cart/cart.actions";
import { selectCountCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shoppingBag.svg";
import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCarthidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCarthidden}>
    <ShoppingIcon className="shopping-icon" />
    <div className="item-count">{itemCount}</div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCarthidden: () => dispatch(toggleCarthidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCountCartItems
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
