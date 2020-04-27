import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Grid from "../components/Grid.js";
//import { getAllByTestId, getByTestId, getByText } from "@testing-library/dom";

test("check if buttons and texts are rendered", () => {
  const { getByText } = render(<Grid sizeArray={5} />);
  expect(getByText("START")).toBeInTheDocument;
  expect(getByText("OPTIONS")).toBeInTheDocument;
  expect(getByText("7 nodes remain to win.")).toBeInTheDocument;
  expect(getByText("total wins 0 : 0 total defeats")).toBeInTheDocument;
});

test("check if correct number of nodes is rendered", () => {
  const { getAllByTestId } = render(<Grid sizeArray={5} />);
  const nodes = getAllByTestId("node");
  expect(nodes).toHaveLength(25);
  expect(nodes).not.toHaveLength(16);
});

jest.useFakeTimers();

test("check if correct number of nodes is shown after click and hidden after time passes", () => {
  const { getByText, container } = render(<Grid sizeArray={5} />);
  const buttonStart = getByText("START");
  fireEvent.click(buttonStart);
  expect(container.getElementsByClassName("chosen")).toHaveLength(7);
  act(() => jest.advanceTimersByTime(1600));
  expect(container.getElementsByClassName("chosen")).toHaveLength(0);
});


//
//
// const buttonStart = getByText("START");
// fireEvent.click(buttonStart);
// test('loads items eventually', async () => {
//   // Click button
//   fireEvent.click(getByText("START"))
//
//   // Wait for page to update with query text
//   const items = await findByText(node, /Item #[0-9]: /)
//   expect(items).toHaveLength(10)
// })
