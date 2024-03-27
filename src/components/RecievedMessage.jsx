import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";
import formatDate from "../utils/formatDate";

export default function RecievedMessage({ conversationDetails, message }) {
  const formattedDate = formatDate(message.timestamp);

  return (
    <div className="flex flex-row gap-3">
      {conversationDetails &&
      conversationDetails.participant[0].profile_pic_src ? (
        <img
          src={conversationDetails.participant[0].profile_pic_src}
          alt=""
          className="h-[45px] w-[45px] rounded-full border border-gray-300  object-cover object-center"
        />
      ) : (
        <img
          src={glassesKissSvg}
          className="h-[45px] w-[45px] rounded-full border border-gray-300  object-cover object-center"
        />
      )}
      <div
        className="flex min-w-min max-w-[80%] flex-col gap-1 self-start"
        key={message._id}
      >
        <p className="self-start rounded-r-3xl rounded-tl-3xl bg-black px-4 py-1 text-white dark:bg-white dark:text-black">
          {message.content}
        </p>
        <p className="self-start text-xs opacity-35">{formattedDate}</p>
      </div>
    </div>
  );
}
