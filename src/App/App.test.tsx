import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it("renders 'Vite + React' title", () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite \+ React/i);
    expect(linkElement).toBeInTheDocument();
  });
});
