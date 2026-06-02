interface AvatarProps {
  src?: string | null;
  name?: string;
  size?: number;
  status?: "online" | "offline";
  className?: string;
}

const Avatar = ({
  src,
  name,
  size = 40,
  status,
  className = "",
}: AvatarProps) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  const sizeStyle = {
    width: `${size}px`,
    height: `${size}px`,
    minWidth: `${size}px`,
  };
  const fontSize = `${Math.round(size * 0.35)}px`;
  const statusSize = `${Math.round(size * 0.28)}px`;

  return (
    <div className={`relative flex-shrink-0 ${className}`} style={sizeStyle}>
      {src ? (
        <img
          src={src}
          alt={name}
          className="rounded-full object-cover w-full h-full"
        />
      ) : (
        <div
          className="rounded-full bg-[#E8F5EE] text-[#008847] flex items-center justify-center font-semibold w-full h-full"
          style={{ fontSize }}
        >
          {initials}
        </div>
      )}
      {status && (
        <span
          className={`absolute bottom-0.5 right-0.5 rounded-full border-2 border-white ${
            status === "online" ? "bg-green-500" : "bg-gray-400"
          }`}
          style={{ width: statusSize, height: statusSize }}
        />
      )}
    </div>
  );
};

export default Avatar;
