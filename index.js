import { createRoot } from "react-dom/client";
import App from "./public/views/App";

const root = createRoot(document.getElementById("root"));

root.render(<App title="Bienvenue" />);
console.log("test");
