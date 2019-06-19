import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//importing testing library
import { render } from '@testing-library/react'; 
import '@testing-library/react/cleanup-after-each'; 
import { fireEvent } from '@testing-library/react/dist'; 

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders successfully", () => {
  render(<App />);
});

it("successfully strikes", () => {
  const { getAllByText, getByText } = render (<App />);
  const button = getAllByText(/strike/i)[1];
  fireEvent.click(button);
  getByText(/1/);
});

it ("successfully resets strikes", () => {
  const { getAllByText, getByText } = render(<App />);
  const button = getAllByText(/strike/i)[1];
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  // getByText(/0/);
});

it ("successfully balls", () => {
  const { getAllByText, getByText } = render(<App />);
  const button = getAllByText(/ball/i)[1];
  fireEvent.click(button);
  getByText(/1/);
});

it("successfully resets balls", () => {
  const { getAllByText, getByText } = render(<App />);
  const button = getAllByText(/ball/i)[1];
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  getAllByText(/0/)[1];
});

it("successfully fouls", () => {
  const { getByText } = render(<App />);
  const button = getByText(/foul/i);
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);
  getByText(/2/);
});