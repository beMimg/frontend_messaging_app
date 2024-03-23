import { useAuth } from "../../context/authProvider";
import Followings from "../../components/Followings";
import MessagesPageHeader from "../../components/MessagesPageHeader";

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
        </div>
      )}
    </div>
  );
}
