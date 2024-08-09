import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../../app/not-found';

describe('Page Component', () => {
  test('renders Not Found page correctly', () => {
    render(<Page />);

    expect(
      screen.getByRole('heading', { name: /not found/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/could not find requested resource/i)
    ).toBeInTheDocument();

    const image = screen.getByAltText('404 Not Found');
    expect(image).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /return home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
