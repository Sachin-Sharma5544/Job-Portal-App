import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AuthProvider from "react-auth-kit/AuthProvider";
import { setupStore } from "./redux/store";
import { store as authStore } from "./authStore";
import App from ".";
import "./index.css";
import "./styles/tailwind.css";

const el = document.getElementById("root");
if (el) {
    const root = createRoot(el);

    const reduxStore = setupStore();
    root.render(
        <React.StrictMode>
            <AuthProvider store={authStore}>
                <Provider store={reduxStore}>
                    <App />
                </Provider>
            </AuthProvider>
        </React.StrictMode>
    );
} else {
    throw new Error("Could not find root element");
}
