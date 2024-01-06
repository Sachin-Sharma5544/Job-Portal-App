import * as React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import axios from "axios";

function App(): JSX.Element {
    React.useEffect(() => {
        const fetchData = async (): Promise<string> => {
            return axios.get("http://localhost:5001/message/1");
        };

        fetchData()
            .then((resp) => {
                console.log("resp", resp);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    return (
        <div className="container">
            <h1 className="title">
                Admin <br />
                <span>Kitchen Sink</span>
            </h1>
            <CounterButton />
            <p className="description">
                Built With{" "}
                <Link href="https://turbo.build/repo" newTab>
                    Turborepo
                </Link>
                {" & "}
                <Link href="https://vitejs.dev/" newTab>
                    Vite
                </Link>
            </p>
        </div>
    );
}

export default App;
