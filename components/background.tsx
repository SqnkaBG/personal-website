// components/Background.tsx

import React from "react";

const Background: React.FC = () => {
  return (
    <div
      className="left-0 top-0 flex h-screen w-screen items-center justify-center"
      style={{
        backgroundImage: `
         radial-gradient(circle closest-corner at 50% 100%, #43B1A8 45%, #335350 65%, #2E403F 75%, #202525 85%, #000000 100%)
        `,
      }}
    ></div>
  );
};

export default Background;
