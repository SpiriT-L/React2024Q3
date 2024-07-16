import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Main from './Main';

test('Main component renders correctly', () => {
  render(<Main />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
