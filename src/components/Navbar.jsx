import { Link } from "react-router-dom";
import ModalCart from "./ModalCart";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { carts } = useSelector((state) => state.meals);
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#8B4513", padding: "10px 20px" }}
    >
      <Link
        className="navbar-brand mx-5"
        to="/"
        style={{ color: "#fff", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        React Meals
      </Link>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button
              className="nav-link btn btn-dark rounded-pill d-flex align-items-center"
              style={{
                backgroundColor: "#5c2c0e",
                color: "#fff",
                border: "none",
                padding: "5px 15px",
              }}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#carts"
              href="/cart"
            >
              <FaCartShopping style={{ marginRight: "5px" }} />
              <span>Order</span>
              <span
                className="badge badge-light ml-2"
                style={{
                  marginLeft: "8px",
                  backgroundColor: "#f5c6a5",
                  color: "#5c2c0e",
                }}
              >
                {carts.length}
              </span>
            </button>
          </li>
        </ul>
      </div>
      <ModalCart></ModalCart>
    </nav>
  );
};

export default Navbar;
