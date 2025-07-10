import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/assets/svg/logo.svg"} alt="logo" width={50} height={50} />
    </Link>
  );
};

export default Logo;
