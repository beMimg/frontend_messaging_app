import { useParams } from "react-router-dom";

export default function VisitedProfile() {
  const { id } = useParams();

  return <p>{id}</p>;
}
