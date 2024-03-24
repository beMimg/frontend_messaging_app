import { useAuth } from "../../context/authProvider";
import Followings from "../../components/Followings";
import MessagesPageHeader from "../../components/MessagesPageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_DOMAIN } from "../../utils/API_DOMAIN";
import ConversationCard from "../../components/ConversationCard";

export default function MessagesPage() {
  const [conversations, setConversations] = useState();
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const userConversations = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_DOMAIN}/conversation`);
        setConversations(response.data.allUserConversations);
        return;
      } catch (err) {
        setErrors(err.response.data.errors);
      } finally {
        setIsLoading(false);
      }
    };
    userConversations();
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  const { user } = useAuth();

  return (
    <div className="p-6">
      {user && (
        <div>
          <MessagesPageHeader />
          <div className="mt-4">
            <Followings />
          </div>
          <div className="flex flex-col ">
            <h1 className="py-3 text-xl font-semibold">Messages</h1>
            <div className="flex flex-col gap-3">
              {conversations &&
                conversations.map((conversation) => (
                  <ConversationCard
                    key={conversation.participant._id}
                    conversation={conversation}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
