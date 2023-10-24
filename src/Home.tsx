import { useMemo } from "preact/hooks";
import randomColor from "randomcolor";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export const buttons = ["Hello", "Feeling non-verbal", "Hungry", "Happy"];

export function Home() {
  const nav = useNavigate();
  const buttonMap = useMemo(() => {
    const storedString = localStorage.getItem("buttons");
    let storedButtons: string[] = storedString
      ? JSON.parse(storedString)
      : buttons;

    storedButtons = storedButtons.filter((button) => button != "");
    localStorage.setItem("buttons", JSON.stringify(storedButtons));

    const colors = randomColor({
      luminosity: "light",
      count: storedButtons.length,
    });

    return storedButtons.map((button, index) => {
      const utterance = new SpeechSynthesisUtterance(button);
      return (
        <Button
          text={button}
          onClick={() => speechSynthesis.speak(utterance)}
          color={colors[index]}
        />
      );
    });
  }, []);

  return (
    <>
      <div class="title">
        Evie's
        <br />
        Talking Buttons
      </div>
      <div class="button-container">{buttonMap}</div>
      <button class="ui-button" onClick={() => nav("/settings")}>
        Settings
      </button>
    </>
  );
}
