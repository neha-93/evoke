import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J06mTSDsSxloBKLlTJ5p0bHe9hp3A0KUGhFod8ClvBljwfwz7HT5QL7prC8txgjEWu5PR6JSCk3Yat4w6e9sJ3300I8LqZS5E";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="evoke Clothing Ltd."
      currency="INR"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/ZbG.svg"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
