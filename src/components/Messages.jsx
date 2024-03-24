import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { useAuth } from "../context/authProvider";
import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";

export default function Messages({ conversation_id, conversationDetails }) {
  const [messages, setMessages] = useState();
  const { user } = useAuth();

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `${API_DOMAIN}/conversation/${conversation_id}/message`,
        );

        setMessages(response.data);
        return;
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [conversation_id]);

  return (
    <div className="flex flex-col gap-8 ">
      {messages &&
        user &&
        messages.allMessages.map((message) =>
          message.sender === user._id ? (
            <div key={message._id} className="flex flex-row gap-3">
              {conversationDetails &&
              conversationDetails.participant[0].profile_pic_src ? (
                <img
                  src={conversationDetails.participant[0].profile_pic_src}
                  alt=""
                  className="h-[45px] w-[45px] rounded-full border border-gray-300  object-cover object-center"
                />
              ) : (
                <img
                  src={glassesKissSvg}
                  className="h-[45px] w-[45px] rounded-full border border-gray-300  object-cover object-center"
                />
              )}
              <div>
                <p className="flex  items-center rounded-r-3xl rounded-tl-3xl px-4 py-1 text-center dark:bg-white dark:text-black">
                  {message.content}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={message._id}
              className="self-end rounded-l-3xl rounded-tr-3xl px-4 py-1 dark:bg-neutral-700"
            >
              <p>{message.content}</p>
            </div>
          ),
        )}
    </div>
  );
}
