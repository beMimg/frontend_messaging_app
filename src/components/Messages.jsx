import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import ConversationCard from "./ConversationCard";

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
    <div className="flex flex-col ">
      <h1 className="py-3 text-xl font-semibold">Messages</h1>
      <div className="flex flex-col gap-3">
        {conversations &&
          conversations.map((conversation) => (
            <ConversationCard
              key={conversation.participant._id}
              conversation={conversation}
            />
          ))}
      </div>
    </div>
  );
}
