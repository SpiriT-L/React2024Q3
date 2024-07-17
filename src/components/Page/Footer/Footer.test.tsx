import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import Footer from './Footer';

test('Footer component renders correctly', () => {
  render(<Footer />);
  const footerElement = screen.getByText('footer');
  expect(footerElement).toBeInTheDocument();
});
