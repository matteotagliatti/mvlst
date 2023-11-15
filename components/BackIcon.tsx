import Link from "next/link";

export default function BackIcon({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      className="transition-colors hover:text-secondary mb-6 block text-sm"
      href={href}
    >
      <svg
        className="mr-1 inline-flex items-center"
        height="15"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          d="M11.354 11.354a.5.5 0 0 0 0-.707L4.707 4H9a.5.5 0 0 0 0-1H3.5a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V4.707l6.646 6.647a.5.5 0 0 0 .708 0Z"
        ></path>
      </svg>
      {text}
    </Link>
  );
}
