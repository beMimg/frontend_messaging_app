import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import DefaultImage from "./DefaultImage";
import catImg from "../assets/kitty-cat.jpeg";

export default function ExplorePagination() {
  const { pagination } = useParams();
  const [allUsers, setAllUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigation = useNavigate();

  const extractPageNumber = parseInt(pagination.split("=")[1]);
  const nextPage = allUsers && allUsers.length === 10 && extractPageNumber + 1;
  const prevPage = extractPageNumber !== 1 ? extractPageNumber - 1 : null;

  if (isNaN(extractPageNumber)) {
    return <p>This page doesn't exists.</p>;
  }

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setErrors();
        setIsLoading(true);
        const response = await axios.get(`${API_DOMAIN}/users?${pagination}`);
        setAllUsers(response.data.users);
        return;
      } catch (err) {
        console.log(err.response.data.message);
        setErrors(err.response.data.message);
        return;
      } finally {
        setIsLoading(false);
      }
    };
    getAllUsers();
  }, [pagination]);

  function handleNavigateToFirstPage() {
    setErrors();
    navigation("/explore/page=1");
    return;
  }

  if (errors) {
    return (
      <div>
        <p>
          Page not found,{" "}
          <span
            className=" cursor-pointer font-semibold text-rose-500"
            onClick={handleNavigateToFirstPage}
          >
            go back to the first page.
          </span>
        </p>
      </div>
    );
  }
  console.log(prevPage);
  console.log(allUsers);
  return (
    <div className=" flex h-full w-full flex-col">
      {allUsers && (
        <>
          <div className="flex flex-row items-center self-center">
            {prevPage && (
              <Link to={`/explore/page=${prevPage}`}>
                <MdNavigateBefore className="text-2xl" />
              </Link>
            )}
            <p>{extractPageNumber}</p>
            {nextPage && (
              <Link to={`/explore/page=${nextPage}`}>
                <MdNavigateNext className="text-2xl" />
              </Link>
            )}
          </div>
          <div className="flex h-full flex-col gap-4 p-2 lg:w-[50%] lg:self-center">
            {allUsers.map((user) => (
              <Link to={`/users/${user._id}`} key={user._id} className=" flex ">
                {user.profile_pic_src ? (
                  <img
                    src={user.profile_pic_src}
                    alt=""
                    className=" h-[70px] w-[70px] rounded-full   object-cover object-center"
                  />
                ) : (
                  <img
                    src={catImg}
                    className=" h-[70px] w-[70px] rounded-full   object-cover object-center"
                  ></img>
                )}

                {/* <div className="absolute bottom-10 w-full  text-center">
                  <Link
                    to={`/users/${user._id}`}
                    className=" rounded-md bg-rose-800 px-8 py-1 text-center font-semibold text-white xl:px-10 xl:py-2"
                  >
                    See Profile
                  </Link>
                </div> */}
                <div className="flex h-full flex-col items-center justify-center">
                  <p className="font-semibold">{user.first_name}</p>
                  <p className=" ">@{user.username}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}