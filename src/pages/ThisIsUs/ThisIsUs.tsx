import { NavLink } from "react-router-dom";
import "./ThisIsUs.scss";

export const ThisIsUs = () => {
  return (
    <div className="thisIsUs">
      <h1>This page in development now.</h1>
      <NavLink to="/" className="btn">
        Home
      </NavLink>
    </div>
  );
};
