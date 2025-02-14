import Image from "next/image";

interface LogoProps {
  size: number;
  image: string;
  mb?: boolean;
}
const Logo = ({ size, image, mb }: LogoProps) => {
  return (
    <Image
      src={`${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/asset/images/${image}.png`}
      width={size}
      height={size}
      alt={`${image} Logo`}
      priority
      className={`${mb ? "mb-4" : ""} rounded-2xl object-contain block`}
    />
  );
};

export default Logo;
