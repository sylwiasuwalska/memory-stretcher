import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Grid from '../components/Grid.js';
import showingRandomNodes from '../components/Grid'

test('check if handle click function works', (done) => {
  const handleClick = () => {
    done();
  }
  const {container } = render(<Grid sizeArray={5} />);
  const node = container.getElementsByClassName("square");
  fireEvent.click(node[0]);
});

test('check if button is rendered', () => {
  const { getByText } = render(<Grid sizeArray={5} />);
  expect(getByText("START")).toBeInTheDocument;
});
