import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
function tick() {
    const element = (
        <div>
            <h1 class="text-blue-600">Hello, world!</h1>
            <h2 class="text-gray-400">{new Date().toLocaleTimeString()}</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000);
