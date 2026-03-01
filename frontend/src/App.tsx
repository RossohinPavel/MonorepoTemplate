import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as api from "./api"

import * as shared from "@project/shared";

function App() {
  const [count, setCount] = useState(0)

  const [msg, setMsg] = useState("");

  useEffect(() => {
    const client = {host: "http://localhost:3000"};
    api.functional.getHello(client).then(v => setMsg(v));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {msg}
      </p>
    </>
  )
}

export default App
