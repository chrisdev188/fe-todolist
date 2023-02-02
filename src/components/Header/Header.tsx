import { useState } from "react";

type Props = {};

type MockMode = "dark" | "light";

const Header = (props: Props) => {
  const [mode, changeMode] = useState<MockMode>("light");

  let iconPath = "";
  if (mode === "light") {
    iconPath = "icon-moon.svg";
  } else if (mode === "dark") {
    iconPath = "icon-sun.svg";
  }

  return (
    <header className="flex items-center justify-between mb-10 relative z-20">
      <img src="/images/todo-logo.svg" alt="todo" />
      <button aria-label="toggle dark/light mode">
        <img src={`/images/${iconPath}`} alt="" aria-hidden className="w-5" />
      </button>
    </header>
  );
};

export default Header;
