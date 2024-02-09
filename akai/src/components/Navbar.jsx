import logo from "../assets/img/logoakai2.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between border absolute w-full p-12 py-0">
      <img src={logo} alt="" className="w-28" />
      {/* <h1 style={{ color: "white" }}>navbar</h1> */}

      <ul className="flex justify-between items-center w-1/2 text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/features">Features</NavLink>
        </li>

        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
