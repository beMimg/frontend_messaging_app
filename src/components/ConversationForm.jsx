import { IoSend } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { useState } from "react";

export default function ConversationForm({ conversation_id }) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_DOMAIN}/conversation/${conversation_id}/message`,
        { content: content },
        {},
      );
      return console.log(response);
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <div className="dark: flex w-full flex-row items-center gap-4  bg-gradient-to-br from-white to-gray-200  p-2 dark:from-gray-400 dark:to-neutral-800">
      <FaPlus />
      <form
        className="flex w-full  flex-1 flex-row gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="content"
          placeholder="Type your message.."
          className=" w-full bg-transparent  p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="  rounded-full bg-gradient-to-b from-rose-500 to-rose-900 p-2 text-center text-lg text-white"
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
}
