import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex h-screen flex-col justify-around p-6 font-roboto ">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-semibold ">Create Account</h1>
        <p className=" text-gray-400">Connect with your friends today!</p>
      </div>
      <form className="flex  flex-col  gap-3">
        <div className="flex flex-col">
          <label htmlFor="first_name" className=" font-medium">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Your first name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last_name" className=" font-medium">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Your last name"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className=" font-medium">
            Email Adress
          </label>
          <input
            type="email"
            name="email"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Your email adress"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className=" font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Your password"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password_confirmation" className=" font-medium">
            Password Confirmation
          </label>
          <input
            type="password"
            name="password_confirmation"
            id=""
            className="rounded-md border border-gray-300 p-2"
          />
        </div>
      </form>
      <button
        type="submit"
        className=" button-default primary-bg-color text-white"
      >
        Sign Up
      </button>
      <p className="text-center">
        Already have an account?{" "}
        <Link className="primary-text-color font-semibold underline">
          Login
        </Link>
      </p>
    </div>
  );
}
