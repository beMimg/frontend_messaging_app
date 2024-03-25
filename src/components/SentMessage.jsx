import formatDate from "../utils/formatDate";

export default function SentMessage({ message }) {
  const formattedDate = formatDate(message.timestamp);
  return (
    <div
      className="flex min-w-min max-w-[80%] flex-col gap-1 self-end"
      key={message._id}
    >
      <p className="self-end rounded-l-3xl rounded-tr-3xl px-4 py-1 dark:bg-neutral-700">
        {message.content}
      </p>
      <p className="self-end text-xs opacity-35">{formattedDate}</p>
    </div>
  );
}
