import axios from "axios";
import { useAuth } from "../context/authProvider";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { useEffect, useState } from "react";

export default function FollowUnfollowButton({
  isFollowed,
  setIsFollowed,
  visitedUser,
}) {
  const [isLoading, setIsLoading] = useState();
  const [errors, setErrors] = useState();
  const { user } = useAuth();

  async function handleFollow() {
    try {
      if (isFollowed) {
        setIsLoading(true);
        const response = await axios.delete(
          `${API_DOMAIN}/users/follow/${visitedUser._id}`,
        );
        // After delete, if the the user is not following the visited user, setIsFollowed to false.
        // It's important to create the if statement and check if the user is really following the visited user
        // in the database. Even tho we await the response (meaning it completed the delete request).
        if (user && !user.following.includes(visitedUser._id)) {
          setIsFollowed(false);
          setIsLoading(false);
          return;
        }
      } else {
        setIsLoading(true);
        const response = await axios.post(
          `${API_DOMAIN}/users/follow/${visitedUser._id}`,
        );
        if (user && !user.following.includes(visitedUser._id)) {
          setIsFollowed(true);
          setIsLoading(false);
          return;
        }
        return;
      }
    } catch (err) {
      setErrors("We apologiese, something went wrong...");
    }
  }

  return (
    <button
      onClick={handleFollow}
      disabled={isLoading}
      className={`rounded-md px-12 py-3 font-semibold ${isFollowed ? "bg-red-500 " : "bg-green-600"}`}
    >
      {errors
        ? errors
        : isLoading
          ? "Loading..."
          : isFollowed
            ? "Unfollow"
            : "Follow"}
    </button>
  );
}
