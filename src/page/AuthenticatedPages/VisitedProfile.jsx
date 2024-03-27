import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_DOMAIN } from "../../utils/API_DOMAIN";
import DefaultImage from "../../components/DefaultImage";
import { useAuth } from "../../context/authProvider";
import FollowUnfollowButton from "../../components/FollowUnfollowBtn";

export default function VisitedProfile() {
  const [visitedUser, setVisitedUser] = useState();
  const [isFollowed, setIsFollowed] = useState();
  const [isLoading, setIsLoading] = useState();
  const [errors, setErrors] = useState();

  const { id } = useParams();

  const { user } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_DOMAIN}/users/${id}`);
        setVisitedUser(response.data.user);
        // If the user logged is following the visitedUser._id
        // set followed to true
        if (user && user.following.includes(response.data.user._id)) {
          setIsFollowed(true);
          setIsLoading(false);
          return;
        }
        setIsFollowed(false);
        setIsLoading(false);
        return;
      } catch (err) {
        return setErrors("We apologize, could not fetch this user...");
      }
    };

    // Conditionally calling the getUser function ensures that it's executed only when a valid user exists.
    // Without this check, the useEffect hook would run on component mount, potentially triggering an error
    // if the user is not yet populated (i.e., null or undefined). By verifying the existence of the user,
    // we prevent setting an error unnecessarily during initial mounting. Additionally, this prevents the
    // persistence of any error state from the initial mount, even if the user becomes defined later and the
    // useEffect reruns due to changes in dependencies. This approach ensures a smoother handling of errors
    // and avoids unnecessary re-renders caused by state inconsistencies.
    if (user) {
      getUser();
    }
  }, [user]);
  // We need to set user as a dependecies because when we refresh a page (without [user]),
  // {user} might not be populated yet. Causing the if statement inside the useEffect, to setIsFollowed
  //  to false, because the user does not exist. Therefore, the if statement doesn't run.

  // async function unfollowUser() {
  //   try {
  //     const response = await axios.delete(
  //       `${API_DOMAIN}/users/follow/${visitedUser._id}`,
  //     );
  // After delete, if the the user is not following the visited user, setIsFollowed to false.
  // It's important to create the if statement and check if the user is really following the visited user
  // in the database. Even tho we await the response (meaning it completed the delete request).
  //     if (user && !user.following.includes(visitedUser._id)) {
  //       setIsFollowed(false);
  //     }

  //     return;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function followUser() {
  //   try {
  //     const response = await axios.post(
  //       `${API_DOMAIN}/users/follow/${visitedUser._id}`,
  //     );
  //     if (user && !user.following.includes(visitedUser._id)) {
  //       setIsFollowed(true);
  //     }
  //     return;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  if (errors) {
    return <p>{errors}</p>;
  }
  if (isLoading) {
    return <p>LOADING......................</p>;
  }

  return (
    visitedUser && (
      <div className="flex w-full flex-col">
        <div className="relative mb-14 lg:mb-32">
          <div className=" h-[180px] w-full bg-gradient-to-b from-rose-500 to-rose-900 lg:h-[300px] lg:rounded-t-lg"></div>
          <div className=" absolute -bottom-[50px] flex w-full items-center justify-center lg:-bottom-[100px]">
            <div className="hover-display relative h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]">
              {visitedUser.profile_pic_src ? (
                <img
                  src={visitedUser.profile_pic_src}
                  alt=""
                  className="h-full w-full rounded-full border-2 border-gray-200 object-cover object-center"
                />
              ) : (
                <DefaultImage size="full" />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-lg font-semibold">
            {visitedUser.first_name} @{visitedUser.username}
          </h1>
          <p className="opacity-60">
            {visitedUser.bio ? visitedUser.bio : "This user has no bio..."}
          </p>
          <FollowUnfollowButton
            isFollowed={isFollowed}
            setIsFollowed={setIsFollowed}
            visitedUser={visitedUser}
          />
        </div>
      </div>
    )
  );
}
