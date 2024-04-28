import { LiaRandomSolid } from "react-icons/lia";
import axios from "axios";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { useAuth } from "../context/authProvider";
import { useState } from "react";
import LoadingDots from "./LoadingDots";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const SignInAsGuest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState();

  const navigate = useNavigate();
  const { setToken } = useAuth();

  async function handleGuest() {
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_DOMAIN}/login/guest`);
      if (response.status === 200) {
        setErrors();
        setIsSuccess(true);

        setTimeout(() => {
          setToken(response.data.token);
          navigate("/", { replace: true });
        }, [3000]);
      }
      return;
    } catch (err) {
      setErrors("Ups, something went wrong...");
      setTimeout(() => {
        setErrors();
      }, [2000]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={handleGuest}
        disabled={isLoading}
        className=" flex w-full  flex-row items-center justify-center gap-1  py-2 xl:text-xl "
      >
        {!isLoading ? (
          <>
            <LiaRandomSolid />
            Sign in as a <span className="font-semibold underline">Guest</span>
          </>
        ) : (
          <>
            <LoadingDots />
          </>
        )}
      </button>
      {isSuccess && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-60 ">
          <section className="flex w-[80%] items-center justify-center  rounded-lg border border-black bg-white p-4 text-black lg:w-[40%]">
            <h1 className="font-semibold text-emerald-500">
              Please wait, you will be redirected...
            </h1>
          </section>
        </div>
      )}
      {errors && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-60 ">
          <section className="flex w-[80%] flex-col items-center justify-center gap-4  rounded-lg border border-black bg-white p-4 text-black lg:w-[40%]">
            <h1 className="flex text-center font-semibold text-red-500">
              {errors}
            </h1>
          </section>
        </div>
      )}
    </>
  );
};

export default SignInAsGuest;
