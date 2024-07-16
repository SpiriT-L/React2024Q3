import { render } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import App from './App';

test('App renders the header', () => {
  const { getByText } = render(<App />);
  expect(getByText('Home')).toBeInTheDocument();
});

test('App renders the button', () => {
  const { getByText } = render(<App />);
  expect(getByText('Error')).toBeInTheDocument();
});

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
