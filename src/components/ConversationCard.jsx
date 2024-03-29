import { Link, NavLink } from "react-router-dom";
import { DateTime } from "luxon";
import DefaultImage from "./DefaultImage";

import { useAuth } from "../context/authProvider";
import ConversationCardLastMessageisRead from "./ConversationCardLastMessageIsRead";

export default function ConversationCard({ conversation }) {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // // use users time zone to format the date of comment
  const formattedDate = DateTime.fromISO(conversation.lastMessage.timestamp)
    .setZone(userTimeZone)
    .toLocaleString(DateTime.DATETIME_SHORT);

  const lastMessageSmaller = conversation.lastMessage.content.slice(0, 30);

  const { user } = useAuth();
  console.log(conversation);

  const linkStyle =
    "relative flex flex-row gap-3 px-4 py-2 hover:bg-stone-100 h-[85px]  dark:hover:bg-zinc-800 border-b border-gray-300 dark:border-neutral-700";
  const activeLinkStyle =
    "relative flex flex-row gap-3 px-4 py-2 dark:bg-neutral-800 h-[85px] bg-gray-100  border-b border-gray-300 dark:border-neutral-700";

  // If the message was sent by the user and still not being read by the other conversation participant
  // It has only one tick (gray) before the content of the message.
  // If the last message sender._id is equal to the user._id and isRead === false

  // If the message was sent byt the user and read by the other conversation participant
  // It has two ticks (blue) before the content of the message
  // If the last message sender is equal to the user id and isRead is equal to true.

  // If the message was sent by the other conversation participant and stil l not being read
  // The font is bold and it has a a red circle in the end of the message.

  // If the emssage was sent by the other participant and was read
  // The font is normal and nothing to add.

  return (
    user && (
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
          <DefaultImage size="[60px]" />
        )}
        <div className="flex w-full flex-row items-center justify-between ">
          <div className="flex flex-col justify-center">
            <p
              className={`text-lg ${conversation.lastMessage.sender._id !== user._id && conversation.lastMessage.isRead === false && "font-bold"}`}
            >
              {conversation.participant.username}
            </p>
            <div className="flex flex-row items-center gap-1">
              <ConversationCardLastMessageisRead
                conversation={conversation}
                userId={user._id}
              />
            </div>
          </div>
          <p className=" p-2 text-xs">{formattedDate}</p>
        </div>
      </NavLink>
    )
  );
}
