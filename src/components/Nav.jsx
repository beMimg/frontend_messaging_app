import { FiSearch } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="absolute bottom-5  flex w-full items-center justify-center">
      <nav className=" flex  flex-row gap-6 rounded-lg text-center">
        <Link to="/" className="p-2 text-2xl">
          <FiMessageSquare />
        </Link>
        <Link className="p-2 text-2xl">
          <FiSearch />
        </Link>
        <Link to="/profile" className="p-2 text-2xl">
          <GoPerson />
        </Link>
      </nav>
    </div>
  );
}
