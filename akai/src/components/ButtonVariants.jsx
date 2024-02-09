import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function ButtonVariants({ text, to, variant }) {
  return (
    <div className="flex w-max gap-4">
      <Button variant={variant} className="rounded-full">
        <NavLink to={to} className="text-white">
          {text}
        </NavLink>
      </Button>
    </div>
  );
}
