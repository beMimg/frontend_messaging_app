import { useAuth } from "../../context/authProvider";
import Followings from "../../components/Followings";
import MessagesHeader from "../../components/MessagesHeader";

export default function Messages() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      {user && (
        <div>
          <MessagesHeader />
          <div className="mt-4">
            <Followings />
          </div>
        </div>
      )}
    </div>
  );
}
