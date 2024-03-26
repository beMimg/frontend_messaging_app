import catImg from "../assets/kitty-cat.jpeg";

export default function DefaultImage({ size }) {
  return (
    <img
      src={catImg}
      className={`h-${size} w-${size} rounded-full border-2 border-gray-200 object-cover object-center`}
    />
  );
}
