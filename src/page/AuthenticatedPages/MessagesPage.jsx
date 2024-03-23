import { useAuth } from "../../context/authProvider";
import Followings from "../../components/Followings";
import MessagesPageHeader from "../../components/MessagesPageHeader";
import Messages from "../../components/Messages";

export default function MessagesPage() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      {user && (
        <div>
          <MessagesPageHeader />
          <div className="mt-4">
            <Followings />
          </div>
          <div>
            <Messages />
          </div>
        </div>
      )}
    </div>
  );
}
