import React from "react";
import {render, fireEvent, act, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import Grid from "../components/Grid.js";
//import { getAllByTestId, getByTestId, getByText } from "@testing-library/dom";

afterEach(cleanup);

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

test("check if correct number of nodes is shown and hidden after time passes", () => {
  const { getByText, container } = render(<Grid sizeArray={5} />);
  const buttonStart = getByText("START");
  fireEvent.click(buttonStart);
  expect(container.getElementsByClassName("chosen")).toHaveLength(7);
  act(() => jest.advanceTimersByTime(1600));
  expect(container.getElementsByClassName("chosen")).toHaveLength(0);
});


jest.clearAllTimers();

test("check if click on node calls action", () => {
  const { getByText, container, getByTestId, getAllByTestId } = render(<Grid sizeArray={5} />);
  const buttonStart = getByText("START");
  const node = getAllByTestId("node");
  expect(node[0]).toHaveClass('square')

  fireEvent.click(buttonStart);
  act(() => jest.advanceTimersByTime(1600));

  fireEvent.click(node[0])
  expect(node[0]).toHaveClass('square missed')

  jest.clearAllTimers()
  act(() => jest.advanceTimersByTime(1000));
  expect(node[0]).not.toHaveClass('square missed')
});



