import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { Link } from "react-router-dom";

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
      <div>
        <div className="flex flex-row gap-3">
          <h1 className="text-md font-semibold">Following</h1>
          <p>{followings.length}</p>
        </div>
        <div className=" max-h-[300px]">
          {followings.map((follow) => (
            <Link>
              <div
                key={follow._id}
                className="h-[60px] w-[60px] rounded-full bg-teal-600"
              ></div>
            </Link>
          ))}
        </div>
      </div>
    )
  );
}
