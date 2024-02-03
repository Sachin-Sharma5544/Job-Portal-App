import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import Layout from "./layout/Layout";

function App(): JSX.Element {
    return (
        <div className="w-100">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route element={<h1>New children</h1>} path="/" />
                        <Route element={<h1>children</h1>} path="/test" />
                    </Routes>
                </Layout>
                <CounterButton />
            </BrowserRouter>
        </div>
    );
}

export default App;
