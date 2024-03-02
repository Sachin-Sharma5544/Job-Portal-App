import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from ".";
import "./index.css";
import "./styles/tailwind.css";

const el = document.getElementById("root");
if (el) {
    const root = createRoot(el);
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
} else {
    throw new Error("Could not find root element");
}
