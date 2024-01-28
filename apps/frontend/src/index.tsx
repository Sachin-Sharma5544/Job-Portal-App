import * as React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
    return (
        <div className="w-100">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route element={<h1>Home</h1>} path="/home" />
                        <Route element={<h1>Test</h1>} path="/test" />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
