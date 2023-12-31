import Link from "next/link";

interface Props {
  href: string;
  text: string;
  size?: "sm" | "base";
  color?: "zinc" | "green";
}

export const TextLink = ({
  href,
  text,
  size = "base",
  color = "zinc",
}: Props) => {
  const textSize = `text-${size}`;
  const textColor = `text-${color}-500`;
  return (
    <Link href={href} className={`${textSize} ${textColor} hover:underline`}>
      {text}
    </Link>
  );
};
