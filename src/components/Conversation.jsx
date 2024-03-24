import { IoSend } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function Conversation({ conversation_id }) {
  return (
    <div>
      <p>{conversation_id}</p>
      <div className="dark: flex w-full flex-row items-center gap-4  bg-gradient-to-br from-white to-gray-200  p-2 dark:from-gray-400 dark:to-neutral-800">
        <FaPlus />
        <form className="w-full flex-1 ">
          <input
            type="text"
            name="content"
            placeholder="Type your message.."
            className=" w-full bg-transparent  p-2"
          />
        </form>
        <button
          type="submit"
          className="  rounded-full bg-gradient-to-b from-rose-500 to-rose-900 p-2 text-center text-lg text-white"
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}
