import ConversationForm from "./ConversationForm";
import ConversationHeader from "./ConversationHeader";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import Messages from "./Messages";

export default function Conversation({ conversation_id }) {
  const [conversationDetails, setConversationDetails] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState();

  const messageContainerRef = useRef(null);
  // rerender everytime the conversation_id changes and fetch that
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

  // Scroll to the bottom of the page.
  // Need to set conversationDetails as dependecies because,
  // There's no height without those conversationDetails.
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [conversationDetails]);

  return (
    <div className="flex h-[88%] flex-col lg:h-full">
      <header>
        <ConversationHeader conversationDetails={conversationDetails} />
      </header>
      <div
        className="flex-1 overflow-auto p-2 dark:bg-neutral-900"
        ref={messageContainerRef}
      >
        <Messages
          conversation_id={conversation_id}
          conversationDetails={conversationDetails}
        />
      </div>
      <div>
        <ConversationForm />
      </div>
    </div>
  );
}
