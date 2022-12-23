import Test from "./assets/Test.m4a";

interface Button {
  color: string;
  textColor?: string;
  audio: HTMLAudioElement;
}

const buttons: { [key: string]: Button } = {
  scritches: { color: "#902000", textColor: "white", audio: new Audio(Test) },
  cuddles: { color: "#008045", textColor: "white", audio: new Audio(Test) },
  hungry: { color: "#3900c3", textColor: "white", audio: new Audio(Test) },
};

export default buttons;
