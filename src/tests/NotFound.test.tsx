import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import NotFound from '../../app/not-found';

describe('NotFound Component', () => {
  it('renders correctly', () => {
    render(<NotFound />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Not Found'
    );
    expect(
      screen.getByText('Could not find requested resource')
    ).toBeInTheDocument();
    expect(screen.getByAltText('404 Not Found')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Return Home/i })
    ).toBeInTheDocument();
  });

  it('has correct image attributes', () => {
    render(<NotFound />);

    const image = screen.getByAltText('404 Not Found');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('width', '310');
    expect(image).toHaveAttribute('height', '310');
  });

  it('link redirects to home', () => {
    render(<NotFound />);

    const link = screen.getByRole('link', { name: /Return Home/i });
    expect(link).toHaveAttribute('href', '/');
  });
});
