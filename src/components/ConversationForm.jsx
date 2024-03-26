import { IoSend } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { useState } from "react";

export default function ConversationForm({
  conversation_id,
  setForceRerender,
}) {
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_DOMAIN}/conversation/${conversation_id}/message`,
        { content: content },
        {},
      );
      setContent("");
      setForceRerender((prevRender) => {
        return prevRender + 1;
      });
      return console.log(response);
    } catch (err) {
      return console.log(err);
    }
  }

  return (
    <div className="dark: flex w-full flex-row items-center gap-4  bg-gradient-to-br from-white to-gray-200  p-2 pl-5 dark:from-neutral-600 dark:to-neutral-800">
      <FaPlus />
      <form
        className="flex w-full  flex-1 flex-row gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="content"
          placeholder="Type your message.."
          className=" w-full bg-transparent p-2 placeholder:text-white"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="  rounded-full bg-gradient-to-r from-neutral-600 to-neutral-800 p-2 text-center text-lg text-white"
        >
          <IoSend className=" -rotate-45" />
        </button>
      </form>
    </div>
  );
}
