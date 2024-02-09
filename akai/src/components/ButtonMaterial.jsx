import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function ButtonDefault({ text, to }) {
  return (
    <Button>
      <NavLink to={to} className="text-white">
        {text}
      </NavLink>
    </Button>
  );
}
