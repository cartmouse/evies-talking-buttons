interface Button {
  color: string;
  textColor?: string;
  utterance: SpeechSynthesisUtterance;
}

const buttons: { [key: string]: Button } = {
  scritches: {
    color: "#902000",
    textColor: "white",
    utterance: new SpeechSynthesisUtterance("scritches"),
  },
  cuddles: {
    color: "#008045",
    textColor: "white",
    utterance: new SpeechSynthesisUtterance("cuddles"),
  },
  hungry: {
    color: "#3900c3",
    textColor: "white",
    utterance: new SpeechSynthesisUtterance("hungry"),
  },
};

export default buttons;
