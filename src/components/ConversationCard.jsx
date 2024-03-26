import { Link, NavLink } from "react-router-dom";
import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";
import { DateTime } from "luxon";

export default function ConversationCard({ conversation }) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // // use users time zone to format the date of comment
  const formattedDate = DateTime.fromISO(conversation.lastMessage.timestamp)
    .setZone(userTimeZone)
    .toLocaleString(DateTime.DATETIME_MED);

  const lastMessageSmaller = conversation.lastMessage.content.slice(0, 30);

  const linkStyle = "relative flex flex-row gap-3 px-4 py-2";
  const activeLinkStyle =
    "relative flex flex-row gap-3 px-4 py-2 dark:bg-neutral-950";
  return (
    <NavLink
      to={`/conversation/${conversation.conversation_id}`}
      className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
    >
      {conversation.participant.profile_pic_src ? (
        <img
          className=" h-[60px] w-[60px] rounded-full border-2 border-gray-200  object-cover object-center"
          src={conversation.participant.profile_pic_src}
          alt=""
        />
      ) : (
        <img
          src={glassesKissSvg}
          className="h-[60px] w-[60px] rounded-full border-2 border-gray-200 object-cover object-center"
        />
      )}
      <div className="flex flex-col justify-center">
        <p>{conversation.participant.username}</p>
        <p className="text-s text-gray-500">{lastMessageSmaller}...</p>
      </div>
      <p className="absolute -bottom-0 right-0 text-xs text-gray-500">
        {formattedDate}
      </p>
    </NavLink>
  );
}
