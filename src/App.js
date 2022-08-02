import './App.css'
import { useState } from 'react'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const [disabled, setDisabled] = useState(false)
  const newBtnColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <div>
      <button style={{ backgroundColor: disabled ? 'gray' : buttonColor }} onClick={() => setButtonColor(newBtnColor)} disabled={disabled}>
        Change to {newBtnColor}
      </button>
      <input type={'checkbox'} id="disable-button-checkbox" aria-checked={disabled} defaultChecked={disabled} onClick={() => setDisabled(!disabled)} />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  )
}

export default App
