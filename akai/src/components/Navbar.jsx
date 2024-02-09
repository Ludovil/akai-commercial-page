import logo from "../assets/img/logoakai2.png";
import { NavLink } from "react-router-dom";
import { ButtonDefault } from "./ButtonMaterial";

function Navbar() {
  return (
    <section className="flex justify-between border absolute w-full p-12 py-0">
      <img src={logo} alt="" className="w-28" />
      {/* <h1 style={{ color: "white" }}>navbar</h1> */}

      <nav className="flex w-3/6 justify-between">
        <ul className="  flex justify-between items-center w-8/12 text-white">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {/* login sign in  */}
        <ul className=" flex justify-between items-center w-3/12 text-white">
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <ButtonDefault text="Sign in" to="/signin" />
          </li>
        </ul>
      </nav>
    </section>
  );
}
export default Navbar;
