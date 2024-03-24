import ConversationForm from "./ConversationForm";

export default function Conversation({ conversation_id }) {
  return (
    <div className="flex h-[88%] flex-col lg:h-full">
      <div className="flex-1">
        <p>{conversation_id}</p>
      </div>
      <div className="">
        <ConversationForm />
      </div>
    </div>
  );
}
