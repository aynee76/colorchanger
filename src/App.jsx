import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Color() {
  const [color, setColor] = useState("#761187");


  return (
    <div className="App">
      <main >
        <section onClick={() => setColor("#871111")}></section>
        <section onClick={() => setColor("#5A6628")}></section>
        <section onClick={() => setColor("#113287")}></section>
        <section onClick={() => setColor(color)}></section>
      </main>
    </div>
  );
}

export default Color
