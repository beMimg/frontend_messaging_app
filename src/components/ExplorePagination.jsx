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
          <div className="flex h-full flex-col gap-4 p-4 lg:grid lg:w-[50%] lg:grid-cols-2 lg:self-center">
            {allUsers.map((user) => (
              <Link
                to={`/users/${user._id}`}
                key={user._id}
                className="flex max-h-[150px] flex-row items-center gap-3 bg-gray-100 p-4 dark:bg-neutral-800 "
              >
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
                <div className="flex h-full flex-col justify-center">
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
