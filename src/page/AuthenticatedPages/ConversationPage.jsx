import { useParams } from "react-router-dom";
import MessagesPage from "./MessagesPage";

export default function ConversationPage() {
  const { id } = useParams();

  return (
    <div className="lg:grid lg:h-screen lg:grid-cols-5 xl:grid-cols-6">
      <div className="hidden lg:col-span-2 lg:grid">
        <MessagesPage />
      </div>
      <div className="bg-red-600 lg:col-span-3">
        <h1>conversation {id}</h1>
      </div>
      <div className="hidden bg-green-600  xl:grid">
        <p>lol</p>
      </div>
    </div>
  );
}
