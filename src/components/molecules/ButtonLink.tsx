import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

export const ButtonLink = ({ href, label }: Props) => {
  return (
    <Link href={href}>
      <button className="text-sm text-green-600 border border-green-600 border-solid hover:bg-green-600 hover:text-white min-w-20 h-10 p-2 rounded-md justify-center items-center flex shrink-0">
        {label}
      </button>
    </Link>
  );
};
