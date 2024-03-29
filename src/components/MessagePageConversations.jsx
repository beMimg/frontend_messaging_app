import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { useNewMessageRender } from "../context/NewMessageRenderProvider";
import ConversationCard from "../components/ConversationCard";

export default function MessagePageConversations() {
  const [conversations, setConversations] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState();

  const { newMessageRender } = useNewMessageRender();

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
  }, [newMessageRender]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="flex flex-col ">
      {conversations &&
        conversations.map((conversation) => (
          <ConversationCard
            key={conversation.participant._id}
            conversation={conversation}
          />
        ))}
    </div>
  );
}
