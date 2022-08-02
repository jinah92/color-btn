import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('button has correct initial color', () => {
  render(<App />)

  // find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole('button', { name: /change to blue/i })

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})
test('button turns blue when clicked', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: /change to blue/i })
  expect(button).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(button)

  // expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: 'blue' })

  // expect the button text to be 'Change to red'
  expect(button.textContent).toBe('Change to red')
})
