import { Link } from "react-router-dom";

const NavItem = ({ text, to, mobile }) => {
  return (
    <Link
      to={to}
      className={
        mobile
          ? "block py-3 text-lg border-b hover:text-green-600"
          : "hover:text-green-600 transition duration-200"
      }
    >
      {text}
    </Link>
  );
};

export default NavItem;