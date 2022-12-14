import { render, screen, fireEvent } from '@testing-library/react'
import { replaceCamelWithSpaces } from './App'
import App from './App'

test('button has correct initial color', () => {
  render(<App />)

  // find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole('button', { name: /change to Medium Violet Red/i })

  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: 'Midnight Blue' })
})
test('button turns blue when clicked', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: /change to Medium Violet Red/i })
  expect(button).toHaveStyle({ backgroundColor: 'Midnight Blue' })

  // click button
  fireEvent.click(button)

  // expect the background color to be blue
  expect(button).toHaveStyle({ backgroundColor: 'Medium Violet Red' })

  // expect the button text to be 'Change to red'
  expect(button).toHaveTextContent('Change to Midnight Blue')
})

test('initial conditions', () => {
  render(<App />)

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: /change to Medium Violet Red/i })
  expect(colorButton).toBeEnabled()

  // check that the button starts oust unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: /change to Medium Violet Red/i })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })

  fireEvent.click(checkbox)
  expect(button).toBeDisabled()

  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})

test('button turns gray when disabled', () => {
  render(<App />)

  const button = screen.getByRole('button', { name: /change to Medium Violet Red/i })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })

  //  disable btn -> btn is gray -> enable btn -> btn is red
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'Midnight Blue' })

  // click btn to change color -> disable btn -> btn is gray
  fireEvent.click(button)
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })

  // enable btn -> btn is blue
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'Medium Violet Red' })
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
