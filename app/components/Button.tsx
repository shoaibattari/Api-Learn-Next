import { FC } from "react";
import Link from "next/link";

const Button: FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <button>
      <Link href={link} target="_blank">
        {text}
      </Link>
    </button>
  );
};
export default Button;
