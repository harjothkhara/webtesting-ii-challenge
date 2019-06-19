import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from "@testing-library/react"  // <<<install this
// import "@testing-library/react/cleanup-after-each"
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders successfully", () => {
  render(<App />);
});

it('Successfully strikes', () => {
  const { getAllByText, getByText } = render (<App />);
  const button = getAllByText(/strike/i)[1];
  fireEvent.click(button);
  getByText(/1/);
})
