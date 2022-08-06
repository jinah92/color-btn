import './App.css'
import { useState } from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MidnightBlue')
  const [disabled, setDisabled] = useState(false)
  const newBtnColor = buttonColor === 'MidnightBlue' ? 'MediumVioletRed' : 'MidnightBlue'

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : replaceCamelWithSpaces(buttonColor) }}
        onClick={() => setButtonColor(newBtnColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newBtnColor)}
      </button>
      <input type={'checkbox'} id="disable-button-checkbox" aria-checked={disabled} defaultChecked={disabled} onClick={() => setDisabled(!disabled)} />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  )
}

export default App
