import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('App renders the header', () => {
  const { getByText } = render(<App />);
  expect(getByText('Home')).toBeInTheDocument();
});

test('App renders the button', () => {
  const { getByText } = render(<App />);
  expect(getByText('Error')).toBeInTheDocument();
});
