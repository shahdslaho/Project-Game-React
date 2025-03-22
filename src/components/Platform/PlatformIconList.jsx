/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPanasonic } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
// Platform icon list component
const PlatformIconList = ({ platforms }) => {
  // Map platform slugs to corresponding icons
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

  if (!platforms) return null; // Return null if no platforms are provided

  return (
    <>
      <div className="flex space-x-2 my-2">
        {platforms.map((platform) => {
          const IconPlat = iconMap[platform.slug];
          if (!IconPlat) return null; // Skip if no icon is found for the platform
          return <IconPlat key={platform.id} className="w-6 h-6" />;
        })}
      </div>
    </>
  );
};

export default PlatformIconList;