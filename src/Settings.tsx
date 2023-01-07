import { useEffect, useMemo, useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import { buttons } from "./Home";

import "./Settings.scss";

export default function Settings() {
  const nav = useNavigate();
  const [storedButtons, setStoredButtons] = useState<string[]>(() => {
    const storedString = localStorage.getItem("buttons");
    return storedString ? JSON.parse(storedString) : buttons;
  });

  useEffect(() => {
    localStorage.setItem("buttons", JSON.stringify(storedButtons));
  }, [storedButtons]);

  const onAdd = () => setStoredButtons((s) => [...s, ""]);

  const onReset = () => {
    localStorage.clear();
    setStoredButtons(buttons);
  };

  const onChange = (event: Event, index: number) => {
    if (!event.target) return;
    const { value } = event.target as HTMLInputElement;
    setStoredButtons((s) => {
      s[index] = value;
      return s;
    });
    localStorage.setItem("buttons", JSON.stringify(storedButtons));
  };

  return (
    <>
      <div class="title">Settings</div>
      <div class="stored-button-container">
        <button class="ui-button" onClick={onAdd}>
          +
        </button>
        <button class="ui-button" onClick={onReset}>
          Reset
        </button>
      </div>
      <div class="stored-button-container">
        {storedButtons.map((button, index) => (
          <input
            class="custom-button-input"
            defaultValue={button}
            onChange={(event: Event) => onChange(event, index)}
          ></input>
        ))}
      </div>
      <button class="ui-button" onClick={() => nav("/")}>
        Home
      </button>
    </>
  );
}
