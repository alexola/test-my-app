import {fireEvent, render ,screen } from "@testing-library/react"
import Login from "./login/Login"

test("username input should be rendered", ()=> {
  render(<Login />)
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument("")
})

test("password input should be rendered", ()=> {
  render(<Login />)
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument("")
})

test("button input should be rendered", ()=> {
  render(<Login />)
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument()
})

test("button should be disabled", ()=> {
  render(<Login />)
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeDisabled()
})

test("loading should not be render", ()=> {
  render(<Login />)
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).not.toHaveTextContent(/please wait/i)
})

test("error message should not be visible", ()=> {
  render(<Login />)
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible()
})

test("username input should change", ()=> {
  render(<Login />)
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test"

  fireEvent.change(usernameInputEl, { target: {value: testValue}})
  expect(usernameInputEl).toBeInTheDocument()
})

test("password input should change", ()=> {
  render(<Login />)
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test"

  fireEvent.change(passwordInputEl, { target: {value: testValue}})
  expect(passwordInputEl).toBeInTheDocument()
})

test("button should not be disabled if inputs exisit", ()=> {
  render(<Login />)
  const buttonInputEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test"

  fireEvent.change(usernameInputEl, { target: {value: testValue}})
  fireEvent.change(passwordInputEl, { target: {value: testValue}})
  

  expect(buttonInputEl).not.toBeDisabled()
})

test("loading should be render when click", ()=> {
  render(<Login />)
  const buttonInputEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test"

  fireEvent.change(usernameInputEl, { target: {value: testValue}})
  fireEvent.change(passwordInputEl, { target: {value: testValue}})
  fireEvent.click(buttonInputEl);

  expect(buttonInputEl).not.toHaveTextContent(/please wait/i)
})
