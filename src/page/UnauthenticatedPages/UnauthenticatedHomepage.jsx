import { Link } from "react-router-dom";
import glassesKissSvg from "../../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";
import demonSvg from "../../assets/reshot-icon-demon-RHZBQ8E7SN.svg";
import loveSvg from "../../assets/reshot-icon-love-U63YHWCBJX.svg";
import moneySvg from "../../assets/reshot-icon-money-S6DHLMN347.svg";
import tongeSvg from "../../assets/reshot-icon-tongue-Y92VG4RXPL.svg";

export default function UnauthenticatedHomepage() {
  return (
    <div className="grid h-screen grid-rows-2 bg-gradient-to-b from-rose-500 to-rose-900 p-6 font-roboto text-white">
      <div className="relative">
        <img
          src={glassesKissSvg}
          alt="glasses kiss emoji "
          className=" absolute h-40 rotate-12"
        />
        <img
          src={demonSvg}
          alt="demon emoji"
          className=" absolute bottom-0 right-0 h-24 rotate-[30deg] "
        />
        <img
          src={loveSvg}
          alt="love moji"
          className="absolute bottom-12 left-6 h-16 -rotate-12"
        />
        <img
          src={moneySvg}
          alt="money face emoji"
          className="absolute right-0 h-16  rotate-12"
        />
        <img
          src={tongeSvg}
          alt="tonge out emoji"
          className="absolute bottom-32 right-[78px] h-16"
        />
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl">Let's Get Started</h1>
          <p>
            Connect with each other with catting. Enjoy safe and private texting
          </p>
        </div>
        <Link
          to="/sign-up"
          className="w-full rounded-lg bg-white p-2 text-center font-semibold text-rose-500"
        >
          Start Chatting
        </Link>
        <p>
          Already have an account?{" "}
          <Link to="/login" className=" font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
