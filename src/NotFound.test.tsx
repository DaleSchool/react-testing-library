import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { NotFound } from "./NotFound";

afterEach(cleanup);

test("renders header", () => {
  render(<NotFound path="/abc" />);
  const heading = screen.getByRole("heading", {
    name: /page not found/i,
  });
  expect(heading).toBeInTheDocument();
});

test("renders paragraph", () => {
  render(<NotFound path="/abc" />);
  const paragraph = screen.getByText(/^해당 페이지/);
  expect(paragraph).toHaveTextContent("해당 페이지(/abc)를 찾을 수 없습니다.");
});

test("renders image", () => {
  render(<NotFound path="/abc" />);
  // const image = screen.getByRole("img", { name: /404/i });
  const image = screen.getByAltText(/404/i);
  expect(image).toHaveAttribute(
    "src",
    "https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
  );
});
