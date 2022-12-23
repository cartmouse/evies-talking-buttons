import { useMemo } from "preact/hooks";
import "./app.scss";
import Button from "./Button";
import buttons from "./buttons";

export function App() {
  const buttonMap = useMemo(
    () =>
      Object.keys(buttons).map((button) => {
        const { audio, color, textColor } = buttons[button];
        return (
          <Button
            text={button}
            onClick={() => audio.play()}
            color={color}
            textColor={textColor}
          />
        );
      }),
    []
  );

  return (
    <div id="app">
      <div class="title">
        Eva's
        <br />
        Talking Buttons
      </div>
      <div class="button-container">{buttonMap}</div>
    </div>
  );
}
