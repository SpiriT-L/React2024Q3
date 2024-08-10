import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Gender from '../components/SearchFilter/Category/Gender';
import { vi } from 'vitest';

describe('Gender Component', () => {
  let setPageNumber: jest.Mock;
  let setGender: jest.Mock;

  beforeEach(() => {
    setPageNumber = vi.fn();
    setGender = vi.fn();
  });

  test('renders Gender component and toggles accordion', () => {
    render(<Gender setPageNumber={setPageNumber} setGender={setGender} />);

    const button = screen.getByRole('button', { name: /gender/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Female')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Genderless')).toBeInTheDocument();
    expect(screen.getByText('Unknown')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Female'));
    expect(setGender).toHaveBeenCalledWith('Female');

    fireEvent.click(document.body);
  });
});
