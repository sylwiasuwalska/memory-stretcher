import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import Grid from '../components/Grid.js';


test('check if buttons and texts are rendered', () => {
  const { getByText } = render(<Grid sizeArray={5} />);
  expect(getByText("START")).toBeInTheDocument;
  expect(getByText("OPTIONS")).toBeInTheDocument;
  expect(getByText("7 nodes remain to win.")).toBeInTheDocument;
  expect(getByText("total wins 0 : 0 total defeats")).toBeInTheDocument;
});

// test('check if function is called after button click', () => {
//   const { getByText } = render(<Grid sizeArray={5} />);
//   const buttonStart = getByText("START");
//   fireEvent.click(buttonStart);
//   // expect(startGame).toHaveBeenCalled();
// })
