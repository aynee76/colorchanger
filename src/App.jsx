import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Color() {
  const [color, setColor] = useState("#761187");


  return (
    <div className="App">
      <main style={{ background: color }}>
        <section onClick={() => setColor("#871111")}
          style={{ background: "#871111" }}></section>
        <section onClick={() => setColor("#5A6628")}
          style={{ background: "#5A6628" }}></section>
        <section onClick={() => setColor("#113287")}
          style={{ background: "#113287" }}></section>
        <section onClick={() => setColor("#761187")}
          style={{ background: "#761187" }}></section>
      </main>
    </div>
  );
}

export default Color
