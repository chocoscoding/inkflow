import Image from "next/image";
const Logo = ({ lightMode }: { lightMode: boolean }) => {
  const bigLogo = lightMode ? "/dark" : "/light";
  const smallLogo = lightMode ? "/miniDark" : "/miniLight";
  return (
    <div className="w-[42px] sm:w-[100px] lg:w-[150px] overflow-hidden h-[95%] object-cover relative flex items-center xl:ml-4 shrink-0 md:mr-[3rem] md1:mr-0 ">
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
  );
};

export default Logo;
