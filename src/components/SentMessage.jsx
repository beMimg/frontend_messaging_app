import formatDate from "../utils/formatDate";

export default function SentMessage({ message }) {
  const formattedDate = formatDate(message.timestamp);
  return (
    <div className="flex min-w-min max-w-[80%] flex-col gap-1 self-end">
      <p className="self-end rounded-l-3xl rounded-tr-3xl bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-1  text-white ">
        {message.content}
      </p>
      <p className="self-end text-xs opacity-35">{formattedDate}</p>
    </div>
  );
}
