import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";
import { Link } from "react-router-dom";

export default function ConversationHeader({ conversationDetails }) {
  return (
    <div className="flex flex-row gap-2 p-2">
      {conversationDetails && (
        <Link to="/" className="flex flex-row gap-2 p-2">
          {conversationDetails.participant[0].profile_pic_src ? (
            <img
              src={conversationDetails.participant[0].profile_pic_src}
              className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
            />
          ) : (
            <img
              src={glassesKissSvg}
              className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
            />
          )}
          <div className="flex flex-col justify-evenly">
            <h1>{conversationDetails.participant[0].first_name}</h1>
            <p>@{conversationDetails.participant[0].username}</p>
          </div>
        </Link>
      )}
    </div>
  );
}
