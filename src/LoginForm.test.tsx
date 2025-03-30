import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vitest } from "vitest";
import { LoginForm } from "./LoginForm";

test("enables button when both email and passwords are entered", () => {
  render(<LoginForm onSubmit={() => null} />);

  const button = screen.getByRole("button", {
    name: /로그인/i,
  });
  expect(button).toBeDisabled();

  const email = screen.getByRole("textbox", {
    name: /이메일/i,
  });
  const password = screen.getByLabelText(/비밀번호/i);

  fireEvent.change(email, { target: { value: "user@test.com" } });
  fireEvent.change(password, { target: { value: "TEST1234" } });

  expect(button).toBeEnabled();
});

test("submits from when button is clicked", () => {
  const onSubmit = vitest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  const email = screen.getByRole("textbox", {
    name: /이메일/i,
  });
  const password = screen.getByLabelText(/비밀번호/i);

  fireEvent.change(email, { target: { value: "user@test.com" } });
  fireEvent.change(password, { target: { value: "TEST1234" } });

  const button = screen.getByRole("button", {
    name: /로그인/i,
  });
  fireEvent.click(button);

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith("user@test.com", "TEST1234");
});
