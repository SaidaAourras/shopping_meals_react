import React, { useState } from "react";
import "./Meal.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/MealReducer";

const Meal = (props) => {
  const dispatch = useDispatch();
  const { meal } = props;
  const carts = useSelector((state) => state.meals.carts);
  const cart = carts.length > 0 && carts.find((cart) => meal.id === cart.id);
  const handleAddToCart = () => {
    dispatch(addToCart(meal));
  };

  return (
    <div>
      <div className="card mb-3 my-3 w-100 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img
              src={meal.image}
              className="img-fluid rounded-start cover-image"
              alt={meal.name}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title fw-bold">{meal.name}</h5>
              <p className="card-text text-truncate">{meal.description}</p>
              <h5 className="text-success">${meal.price.toFixed(2)}</h5>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <button
                className="btn btn-outline-primary btn-sm mx-1"
                onClick={() => handleAddToCart()}
              >
                Add to Meal
              </button>
            </div>
          </div>
          <div className="col-md-2 mb-4 d-flex flex-column justify-content-center">
            <label htmlFor="Quantity" className="form-label fw-bold">
              Amount
            </label>
            <input
              type="number"
              id={meal.id}
              className="form-control mx-auto"
              style={{ width: "80px" }}
              min="1"
              value={cart ? cart.totalPrice : 0}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
