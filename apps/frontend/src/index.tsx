import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Layout from "./layout/Layout";

function App(): JSX.Element {
    return (
        <div className="bg-red-300">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route element={<h1>New children</h1>} path="/" />
                        <Route element={<h1>children</h1>} path="/test" />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
