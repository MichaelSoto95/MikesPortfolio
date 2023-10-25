import React from "react";
import { TypeAnimation } from "react-type-animation";
const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "My name is Michael and im a developer.",
        1000,
      ]}
      wrapper="span"
      speed={70}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Type;
