import { useMemo } from "preact/hooks";
import "./app.scss";
import Button from "./Button";
import { buttons, colors } from "./buttons";

export function App() {
  const buttonMap = useMemo(
    () =>
      buttons.map((button, index) => {
        const utterance = new SpeechSynthesisUtterance(button);
        return (
          <Button
            text={button}
            onClick={() => speechSynthesis.speak(utterance)}
            color={colors[index]}
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
      <button class="ui-button">Settings</button>
    </div>
  );
}
