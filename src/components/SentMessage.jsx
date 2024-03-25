export default function SentMessage({ message }) {
  return (
    <div
      key={message._id}
      className="self-end rounded-l-3xl rounded-tr-3xl px-4 py-1 dark:bg-neutral-700"
    >
      <p>{message.content}</p>
    </div>
  );
}
