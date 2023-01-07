import { render } from "preact";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
);
