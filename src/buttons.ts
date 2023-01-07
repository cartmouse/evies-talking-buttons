import randomColor from "randomcolor";

export const buttons = ["scritches", "cuddles", "hungry", "happy"];

export const colors = randomColor({
  luminosity: "light",
  count: buttons.length,
});
