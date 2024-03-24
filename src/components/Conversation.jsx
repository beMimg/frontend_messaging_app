import { Link } from "react-router-dom";
import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";
import { DateTime } from "luxon";

export default function Conversation({ conversation }) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // // use users time zone to format the date of comment
  const formattedDate = DateTime.fromISO(conversation.lastMessage.timestamp)
    .setZone(userTimeZone)
    .toLocaleString(DateTime.DATETIME_MED);

  const lastMessageSmaller = conversation.lastMessage.content.slice(0, 30);

  return (
    <Link className="relative flex flex-row gap-3 py-1">
      {conversation.participant.profile_pic_src ? (
        <img
          className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
          src={conversation.participant.profile_pic_src}
          alt=""
        />
      ) : (
        <img
          src={glassesKissSvg}
          className="h-[60px] w-[60px] rounded-full border border-gray-300  object-cover object-center"
        />
      )}
      <div>
        <p>{conversation.participant.username}</p>
        <p className="text-gray-500">{lastMessageSmaller}...</p>
      </div>
      <p className="absolute -bottom-0 right-0 text-xs text-gray-500">
        {formattedDate}
      </p>
    </Link>
  );
}
