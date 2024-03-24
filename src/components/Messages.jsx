import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../utils/API_DOMAIN";

export default function Messages({ conversation_id }) {
  const [messages, setMessages] = useState();

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

  return <p>lol</p>;
}
