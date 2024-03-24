import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { Link } from "react-router-dom";
import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";

export default function Followings() {
  const [followings, setFollowings] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getFollowings = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_DOMAIN}/users/followings`);
        return setFollowings(response.data.userFollowings);
      } catch (err) {
        setErrors(err.response.data.errors);
      } finally {
        setIsLoading(false);
      }
    };
    getFollowings();
  }, []);

  // To be improved
  if (isLoading) {
    return <p>...</p>;
  }

  return (
    followings && (
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-2">
          <h1 className="text-md items-center font-semibold">Following</h1>
          <p className="text-center">{followings.length}</p>
        </div>
        <div className=" h-[150px]">
          {followings.map((follow) => (
            <Link to={`/users/${follow._id}`} key={follow._id}>
              {follow.profile_pic_src ? (
                <img
                  src={follow.profile_pic_src}
                  className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
                />
              ) : (
                <img
                  src={glassesKissSvg}
                  className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    )
  );
}
