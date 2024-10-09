// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pantera Negra title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Pantera Negra/i);
  expect(titleElement).toBeInTheDocument();
});
