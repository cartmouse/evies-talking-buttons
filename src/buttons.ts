import { cuddles, hungry, scritches } from "./assets";

interface Button {
  color: string;
  textColor?: string;
  audio: HTMLAudioElement;
}

const buttons: { [key: string]: Button } = {
  scritches: {
    color: "#902000",
    textColor: "white",
    audio: new Audio(scritches),
  },
  cuddles: { color: "#008045", textColor: "white", audio: new Audio(cuddles) },
  hungry: { color: "#3900c3", textColor: "white", audio: new Audio(hungry) },
};

export default buttons;
