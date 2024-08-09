import React from "react";
import Typed from "react-typed";

const TypingEffect = () => {
  return (
    <div className="text-white text-4xl font-bold">
      <Typed
        strings={[
          "Frontend Developer",
          "Software Intern",
          "Full Stack Developer",
        ]}
        typeSpeed={50}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default TypingEffect;
