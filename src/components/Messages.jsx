import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";
import { useAuth } from "../context/authProvider";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";

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
            <RecievedMessage
              conversationDetails={conversationDetails}
              message={message}
            />
          ) : (
            <SentMessage message={message} />
          ),
        )}
    </div>
  );
}
