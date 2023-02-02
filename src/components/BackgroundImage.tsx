import { useState } from "react";

type Props = {};

type MockMode = "dark" | "light";

const BackgroundImage = (props: Props) => {
  const [mode, changeMode] = useState<MockMode>("light");

  return (
    <div>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`/images/bg-desktop-${mode}.jpg`}
        />
        <img
          src={`/images/bg-mobile-${mode}.jpg`}
          alt=""
          role="presentation"
          aria-hidden="true"
          className="absolute top-0 left-0 z-10 h-[15rem] md:h-[20rem] w-full object-cover"
        />
      </picture>
    </div>
  );
};

export default BackgroundImage;
