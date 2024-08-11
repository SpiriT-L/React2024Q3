import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../components/SearchFilter/SearchFilter';
import { vi } from 'vitest';

describe('Filters Component', () => {
  let setPageNumber: vi.Mock;
  let setStatus: vi.Mock;
  let setGender: vi.Mock;
  let setSpecies: vi.Mock;

  beforeEach(() => {
    setPageNumber = vi.fn();
    setStatus = vi.fn();
    setGender = vi.fn();
    setSpecies = vi.fn();
  });

  test('renders Filters component and clears filters', () => {
    render(
      <Filters
        setPageNumber={setPageNumber}
        setStatus={setStatus}
        setGender={setGender}
        setSpecies={setSpecies}
      />
    );

    const clearButton = screen.getByText(/clear filters/i);
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(setStatus).toHaveBeenCalledWith('');
    expect(setGender).toHaveBeenCalledWith('');
    expect(setSpecies).toHaveBeenCalledWith('');

    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Species')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
  });
});
