/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPanasonic } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

const PlatformIconList = ({ platforms }) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  if (!platforms) return null; 

  return (
    <>
      <div className="flex space-x-2 my-2">
        {platforms.map((platform) => {
          const IconPlat = iconMap[platform.slug];
          if (!IconPlat) return null;
          return <IconPlat key={platform.id} className="w-6 h-6" />;
        })}
      </div>
    </>
  );
};

export default PlatformIconList;