import React from "react";
import { iconNames, icons } from "./iconTypes";

const Icon: React.FC<{ name: iconNames }> = ({ name }) => {
  const IconSVG = icons[name];
  return <IconSVG />;
};

export default Icon;
