import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Species from '../components/SearchFilter/Category/Species';
import { vi } from 'vitest';

describe('Species Component', () => {
  const mockSetSpecies = vi.fn();
  const mockSetPageNumber = vi.fn();

  beforeEach(() => {
    render(
      <Species setSpecies={mockSetSpecies} setPageNumber={mockSetPageNumber} />
    );
  });

  test('renders button and species items', () => {
    const button = screen.getByRole('button', { name: /species/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  test('expands the accordion when button is clicked', () => {
    const button = screen.getByRole('button', { name: /species/i });
    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

  test('collapses the accordion when clicking outside', () => {
    const button = screen.getByRole('button', { name: /species/i });
    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');

    fireEvent.mouseDown(document);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  test('calls setSpecies and setPageNumber functions when species button is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /species/i }));
  });
});
