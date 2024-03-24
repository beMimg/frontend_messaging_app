import { useParams } from "react-router-dom";
import MessagesPage from "./MessagesPage";
import Conversation from "../../components/Conversation";
import ConversationDetails from "../../components/ConversationDetails";
import { API_DOMAIN } from "../../utils/API_DOMAIN";
import { useEffect } from "react";
import axios from "axios";

export default function ConversationPage() {
  const { conversation_id, participant_id } = useParams();

  useEffect(() => {
    const getConversation = async () => {
      try {
        const response = await axios.get(
          `${API_DOMAIN}/conversation/${conversation_id}`,
        );

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, []);

  return (
    <div className=" lg:grid lg:h-full lg:grid-cols-5 xl:grid-cols-6">
      <div className="hidden border-r border-white dark:border-neutral-800 lg:col-span-2  lg:grid ">
        <MessagesPage />
      </div>
      <div className="h-screen border-r border-white dark:border-neutral-800  lg:col-span-3 lg:h-full">
        <Conversation
          conversation_id={conversation_id}
          participant_id={participant_id}
        />
      </div>
      <div className="hidden xl:grid xl:p-2">
        <ConversationDetails participant_id={participant_id} />
      </div>
    </div>
  );
}
