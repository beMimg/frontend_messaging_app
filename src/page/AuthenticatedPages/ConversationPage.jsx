import { useParams } from "react-router-dom";

export default function ConversationPage() {
  const { id } = useParams();

  return <p>{id}</p>;
}
