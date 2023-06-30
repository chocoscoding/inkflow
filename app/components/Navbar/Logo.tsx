import Image from "next/image";
import Link from "next/link";
interface LogoType {
  lightMode: boolean;
  noMarginLeft?: boolean;
}
const Logo: React.FC<LogoType> = ({ lightMode, noMarginLeft }) => {
  const bigLogo = lightMode ? "/dark" : "/light";
  const smallLogo = lightMode ? "/miniDark" : "/miniLight";
  return (
    <Link href={`/`}>
      <div
        className={`w-[42px] sm:w-[100px] lg:w-[150px] overflow-hidden h-auto md2:h-[95%] object-cover relative flex items-center ${
          noMarginLeft ? "" : "xl:ml-4"
        } shrink-0 md:mr-[3rem] md1:mr-0`}>
        <Image
          src={`${bigLogo}.png`}
          alt="logo"
          width={350}
          height={200}
          priority
          className="w-full h-auto hidden sm:block"
        />
        <Image
          src={`${smallLogo}.png`}
          alt="logo"
          width={100}
          height={100}
          priority
          className="w-auto h-[60%] block sm:hidden"
        />
      </div>
    </Link>
  );
};

export default Logo;
