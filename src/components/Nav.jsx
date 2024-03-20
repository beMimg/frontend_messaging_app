import { FiSearch } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="absolute bottom-5 left-[100px] flex  flex-row gap-6 rounded-lg text-center">
      <Link className="p-2 text-2xl">
        <FiMessageSquare />
      </Link>
      <Link className="p-2 text-2xl">
        <FiSearch />
      </Link>
      <Link className="p-2 text-2xl">
        <IoPersonSharp />
      </Link>
    </nav>
  );
}
