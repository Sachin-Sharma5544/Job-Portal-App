import * as React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import Layout from "./layout/Layout";

function App(): JSX.Element {
    return (
        <div className="w-100">
            <Layout>
                <h1>children</h1>
            </Layout>
        </div>
    );
}

export default App;
