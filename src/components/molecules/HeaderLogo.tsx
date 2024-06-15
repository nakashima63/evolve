import Image from "next/image";
import Link from "next/link";
import HeaderImage from "../../../public/images/logo.svg";

interface Props {
  link: string;
}

export const HeaderLogo = ({ link }: Props) => {
  return (
    <Link href={link}>
      <Image src={HeaderImage} alt="logo" />
    </Link>
  );
};
