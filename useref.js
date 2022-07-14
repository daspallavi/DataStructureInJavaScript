import "./styles.css";
import { useState, useEffect, useRef } from "react";

export default function App() {
    const [text, setText] = useState("");
    const count = useRef(0);
    const previousRef = useRef("");
    useEffect(() => {
        count.current = count.current + 1;
    });

    useEffect(() => {
        previousRef.current = text;
    }, [text]);
    const focus = () => {
        inputElement.current.focus();
    };

    const inputElement = useRef();
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <input
                type="text"
                ref={inputElement}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                onClick={focus}
            />
            <p>{previousRef.current}</p>
            <p>{count.current}</p>
        </div>
    );
}
