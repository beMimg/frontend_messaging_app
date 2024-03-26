import { IoMdClose } from "react-icons/io";

export default function EditProfilePic({ setIsProfilePicOpen }) {
  return (
    <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-90 ">
      <form className="relative flex flex-col gap-4 rounded-lg bg-white  p-6 dark:bg-neutral-900 dark:text-white">
        <input type="file" name="" id="" />
        <button className="rounded-md bg-black p-1 text-white dark:bg-white dark:text-black">
          Edit Picture
        </button>
        <IoMdClose
          className="absolute right-2 top-2 cursor-pointer text-xl"
          onClick={() => setIsProfilePicOpen(false)}
        />
      </form>
    </div>
  );
}
