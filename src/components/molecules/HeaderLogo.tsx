import Image from "next/image";
import Link from "next/link";
import HeaderImage from "../../../public/images/logo.svg";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image src={HeaderImage} alt="logo" />
    </Link>
  );
};
