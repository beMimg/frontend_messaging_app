import { useEffect } from "react";
import ConversationForm from "./ConversationForm";
import axios from "axios";

export default function Conversation({ conversation_id }) {
  return (
    <div className="flex h-[88%] flex-col lg:h-full">
      <header></header>
      <div className="flex-1 p-2">
        <p>{conversation_id}</p>
      </div>
      <div>
        <ConversationForm />
      </div>
    </div>
  );
}
