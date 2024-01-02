import Image from "next/image";
import Icon from "../../../public/images/user-icon.svg";

export const UserIcon = () => {
  return <Image src={Icon} alt="user-icon" />;
};
