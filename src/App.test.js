import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn a littel bit react/i);
  expect(linkElement).toBeInTheDocument();
});
