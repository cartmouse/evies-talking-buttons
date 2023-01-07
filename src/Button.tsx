import "./Button.scss";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color: string;
  textColor?: string;
}

export default function Button({ text, onClick, color }: ButtonProps) {
  const [clicked, setClicked] = useState(false);
  const newText = useMemo(() => text[0].toUpperCase() + text.slice(1), [text]);
  const timeout = useRef(NaN);

  const click = () => {
    if (onClick) {
      onClick();
    }
    setClicked(true);
    timeout.current = setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  useEffect(() => {
    return () => clearTimeout(timeout.current);
  }, []);

  return (
    <div class={"button-pad"}>
      <button
        class={`button ${clicked ? "button--clicked" : ""}`}
        onClick={click}
        style={{ backgroundColor: color }}
      >
        {newText}
      </button>
    </div>
  );
}
