import "./Button.scss";
import { useMemo, useState } from "preact/hooks";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: string;
  textColor?: string;
}

export default function Button({
  text,
  onClick,
  color,
  textColor,
}: ButtonProps) {
  const [classes, setClasses] = useState("button");
  const newText = useMemo(() => text[0].toUpperCase() + text.slice(1), [text]);

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
    <button
      class={classes}
      onClick={clicked}
      style={{ backgroundColor: color, color: textColor ?? "black" }}
    >
      {newText}
    </button>
  );
}
