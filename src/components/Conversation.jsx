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
  const [forceRerender, setForceRerender] = useState(0);
  const [messages, setMessages] = useState();
  const messageContainerRef = useRef(null);

  // re-fetch everytime the conversation_id changes.
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

  // ForceRerender as dependicies why:
  // ConversationForm on Submit, will increment setForceRerender
  // So every time the user sends a message, it will refetch messages.
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get(
          `${API_DOMAIN}/conversation/${conversation_id}/message`,
        );

        setMessages(response.data);
        return;
      } catch (err) {
        return;
      }
    };
    getMessages();
  }, [conversation_id, forceRerender]);

  // Scroll to the bottom of the page.
  // messages as dependicies so everytime there's a new message
  // it will go to the bottom.
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-[88%] flex-col lg:h-full">
      <header className="h-[80px]">
        <ConversationHeader conversationDetails={conversationDetails} />
      </header>
      <div
        className="flex-1 overflow-auto bg-white p-4 dark:bg-neutral-800"
        ref={messageContainerRef}
      >
        <Messages
          conversation_id={conversation_id}
          conversationDetails={conversationDetails}
          messages={messages}
        />
      </div>
      <div>
        <ConversationForm
          conversation_id={conversation_id}
          setForceRerender={setForceRerender}
        />
      </div>
    </div>
  );
}
