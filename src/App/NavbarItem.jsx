import { Link } from "react-router-dom";

function NavbarItem({ text, route, currentPath }) {
  const isActive = currentPath === route;

  return (
    <Link to={route} className={'px-2 py-2 relative' + (isActive ? ' text-gray-300' : '')}>
      {text}
    </Link>
  )
}

export default NavbarItem;
