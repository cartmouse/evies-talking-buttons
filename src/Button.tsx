import "./Button.scss";
import { useState } from "preact/hooks";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  const [classes, setClasses] = useState("button");

  const clicked = () => {
    if (onClick) {
      onClick();
    }
    setClasses("button button--clicked");
    setTimeout(() => {
      setClasses("button");
    }, 1000);
  };

  return (
    <button class={classes} onClick={clicked}>
      Button
    </button>
  );
}
