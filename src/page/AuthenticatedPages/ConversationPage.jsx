import { useParams } from "react-router-dom";
import MessagesPage from "./MessagesPage";
import Conversation from "../../components/Conversation";
import ConversationDetails from "../../components/ConversationDetails";
import { useEffect } from "react";

export default function ConversationPage() {
  const { conversation_id } = useParams();

  return (
    // <div className=" lg:grid lg:h-full lg:grid-cols-5 xl:grid-cols-6">
    <div className="lg:flex lg:max-h-[100%] lg:w-full  lg:flex-row lg:overflow-hidden">
      <div className="lg:col-span hidden border-r border-white dark:border-neutral-800 lg:flex lg:w-[30%]">
        <MessagesPage />
      </div>
      <div className="h-screen border-r border-white dark:border-neutral-800  lg:col-span-3 lg:max-h-full lg:flex-1 lg:overflow-hidden ">
        <Conversation conversation_id={conversation_id} />
      </div>
      <div className="hidden lg:flex lg:w-[15%]">
        <ConversationDetails />
      </div>
    </div>
  );
}
