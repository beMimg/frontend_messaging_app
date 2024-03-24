import ConversationForm from "./ConversationForm";
import ConversationHeader from "./ConversationHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";

export default function Conversation({ conversation_id }) {
  const [conversationDetails, setConversationDetails] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getConversation = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${API_DOMAIN}/conversation/${conversation_id}`,
        );

        return setConversationDetails(response.data);
      } catch (err) {
        return setErrors(err.response.data.errors);
      } finally {
        return setIsLoading(false);
      }
    };
    getConversation();
  }, [conversation_id]);

  return (
    <div className="flex h-[88%] flex-col lg:h-full">
      <header>
        <ConversationHeader conversationDetails={conversationDetails} />
      </header>
      <div className="flex-1 p-2"></div>
      <div>
        <ConversationForm />
      </div>
    </div>
  );
}
