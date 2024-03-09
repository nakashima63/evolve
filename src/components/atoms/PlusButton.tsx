import Image from "next/image";
import PlusButtonImage from "../../../public/images/plus-button.svg";

export const PlusButton = () => {
  return <Image src={PlusButtonImage} alt="plus-button" />;
};
