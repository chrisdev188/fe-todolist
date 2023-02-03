import { useState } from "react";

type Props = {
  handleChangeMode: () => void;
  isDark: boolean;
};

const Header = (props: Props) => {
  let iconPath = "";
  if (props.isDark) {
    iconPath = "icon-sun.svg";
  } else {
    iconPath = "icon-moon.svg";
  }

  return (
    <header className="flex items-center justify-between mb-10 md:mb-20 relative z-20">
      <img src="/images/todo-logo.svg" alt="todo" />
      <button
        aria-label="toggle dark/light mode"
        onClick={props.handleChangeMode}
      >
        <img src={`/images/${iconPath}`} alt="" aria-hidden className="w-5" />
      </button>
    </header>
  );
};

export default Header;
