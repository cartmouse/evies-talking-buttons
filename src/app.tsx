import { Routes, Route } from "react-router-dom";
import "./app.scss";
import { Home } from "./Home";
import Settings from "./Settings";

export function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
