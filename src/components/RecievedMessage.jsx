import glassesKissSvg from "../assets/reshot-icon-glasses-kiss-YUSND43AHW.svg";

export default function RecievedMessage({ conversationDetails, message }) {
  return (
    <div key={message._id} className="flex flex-row gap-3">
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
      <div>
        <p className="flex  items-center rounded-r-3xl rounded-tl-3xl px-4 py-1 text-center dark:bg-white dark:text-black">
          {message.content}
        </p>
      </div>
    </div>
  );
}
