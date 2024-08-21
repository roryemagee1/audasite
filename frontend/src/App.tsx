import { JSX, useState, useEffect } from 'react'
import './App.css'

function App(): JSX.Element {
  const [ message, setMessage ] = useState<string>("");

  useEffect(() => {
    async function testFunc() {
      const res = await fetch('/api');
      const data = await res.json();
      setMessage(data?.message || "Error");
    }
    testFunc();
  }, [])

  return (
    <>
      <div>
        <h1>Hello, World!</h1>
        <h1>{message}</h1>
      </div>
    </>
  )
}

export default App
