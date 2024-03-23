import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";

export default function Messages() {
  const [conversations, setConversations] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const userConversations = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_DOMAIN}/conversation`);
        setConversations(response.data.allUserConversations);
        return;
      } catch (err) {
        setErrors(err.response.data.errors);
      } finally {
        setIsLoading(false);
      }
    };
    userConversations();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div className="flex flex-col gap-7">
      {conversations &&
        conversations.map((conversation) => (
          <div
            key={conversation.participant._id}
            className="flex flex-row gap-3"
          >
            {conversation.participant.profile_pic_src ? (
              <img
                className="h-[60px] w-[60px]"
                src={conversation.participant.profile_pic_src}
                alt=""
              />
            ) : (
              <p>no photo</p>
            )}
            <div>
              <p>{conversation.participant.username}</p>
              <div className="flex flex-row gap-2 text-gray-600">
                <p>{conversation.lastMessage.sender.username}:</p>
                <p>{conversation.lastMessage.content}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
