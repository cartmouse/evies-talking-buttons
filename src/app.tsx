import { useMemo } from "preact/hooks";
import "./app.scss";
import Button from "./Button";
import buttons from "./buttons";

export function App() {
  const buttonMap = useMemo(
    () => Object.keys(buttons).map((button) => <Button text={button} />),
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
