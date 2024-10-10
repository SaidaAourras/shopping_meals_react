import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Order = () => {
  const { carts, TotalAmount } = useSelector((state) => state.meals);

  return (
    <div className="container w-75 mx-auto text-center my-3 text-light">
      <h1>Thank you for your order!</h1>
      <p>Your order has been successfully submitted.</p>

      <h2>Order Summary:</h2>
      {carts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {carts.map((cartItem) => (
            <div key={cartItem.id}>
              <p>
                {cartItem.name} x {cartItem.quantity} = $
                {cartItem.totalPrice.toFixed(2)}
              </p>
            </div>
          ))}
          <h3>Total Amount: ${TotalAmount.toFixed(2)}</h3>
        </div>
      )}

      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Order;
