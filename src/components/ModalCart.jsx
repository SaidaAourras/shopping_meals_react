import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../redux/MealReducer";
import { useNavigate } from "react-router-dom";

const ModalCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, TotalAmount } = useSelector((state) => state.meals);

  return (
    <div>
      <div
        className="modal fade"
        id="carts"
        tabIndex="-1"
        aria-labelledby="modalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitle">
                Carts
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {carts.map((cart) => (
                  <li
                    key={cart.id}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <div>
                      <h6>
                        {cart.name}
                        <span
                          className="border rounded-1 px-2 mx-2"
                          style={{ border: "1px solid gray" }}
                        >
                          x{cart.quantity}
                        </span>
                      </h6>

                      <br />
                      {cart.totalPrice.toFixed(2)}
                    </div>
                    <div>
                      <button
                        onClick={() => dispatch(incrementQuantity(cart.id))}
                        className="btn btn-outline-success mx-1 w-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(decrementQuantity(cart.id))}
                        className="btn btn-outline-success mx-1 w-2"
                      >
                        -
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex justify-content-end mx-2">
              <h5 className="fs-2 mx-2">
                Total Amount
                <span
                  className="border rounded-1 px-2 mx-2"
                  style={{ border: "1px solid gray" }}
                >
                  ${TotalAmount.toFixed(2)}
                </span>
              </h5>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => navigate("/Order")}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
