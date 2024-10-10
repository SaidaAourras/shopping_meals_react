import { Link } from "react-router-dom";
import ModalCart from "./ModalCart";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { carts } = useSelector((state) => state.meals);
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link className="navbar-brand mx-5 d-flex" to="/">
          <img
            src="https://static.vecteezy.com/ti/vecteur-libre/p3/5550808-modele-de-conception-de-logo-de-restaurant-pour-marque-ou-entreprise-et-autre-vectoriel.jpg"
            className="rounded-1"
            style={{ height: "auto", width: "50px" }}
          />
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <div class="d-flex">
            <button
              className="btn btn-success position-relative me-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#carts"
              href="/cart"
            >
              <FaCartShopping />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {carts.length}
              </span>
            </button>
          </div>
        </div>
      </div>
      <ModalCart></ModalCart>
    </nav>
  );
};

export default Navbar;
