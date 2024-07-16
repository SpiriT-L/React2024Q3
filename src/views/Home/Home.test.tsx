import { fireEvent, render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Home from './Home';

test('Home component renders correctly', () => {
  render(<Home />);

  const headerElement = screen.getByText('Home');
  expect(headerElement).toBeInTheDocument();

  const buttonElement = screen.getByText('Error');
  expect(buttonElement).toBeInTheDocument();

  const inputElement = screen.getByPlaceholderText('Filter the characters...');
  expect(inputElement).toBeInTheDocument();
});

test('Home component is wrapped in ErrorBoundary', async () => {
  render(<Home />);

  const buttonElement = screen.getByText('Error');
  fireEvent.click(buttonElement);

  const errorElement = await screen.findByText('Sorry.. there was an error');
  expect(errorElement).toBeInTheDocument();
});

test('SearchFilter updates filterText', () => {
  render(<Home />);

  const inputElement = screen.getByPlaceholderText('Filter the characters...');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect((inputElement as HTMLInputElement).value).toBe('test');
});
