import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Gender from '../components/SearchFilter/Category/Gender';

describe('Gender Component', () => {
  const setPageNumber = vi.fn();
  const setGender = vi.fn();

  it('renders without crashing', () => {
    render(<Gender setPageNumber={setPageNumber} setGender={setGender} />);
    expect(screen.getByText('Gender')).toBeInTheDocument();
  });

  it('toggles accordion on button click', () => {
    render(<Gender setPageNumber={setPageNumber} setGender={setGender} />);
    const button = screen.getByText('Gender');
    fireEvent.click(button);
    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument();
  });

  it('collapses accordion when clicking outside', () => {
    render(<Gender setPageNumber={setPageNumber} setGender={setGender} />);
    // const button = screen.getByText('Gender');
    fireEvent.mouseDown(document);
    expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument();
  });

  it('calls setGender and setPageNumber on FilterBtn click', () => {
    render(<Gender setPageNumber={setPageNumber} setGender={setGender} />);
    const button = screen.getByText('Gender');
    fireEvent.click(button);
    const filterButton = screen.getByText('Female');
    fireEvent.click(filterButton);
    expect(setGender).toHaveBeenCalledWith('Female');
    expect(setPageNumber).toHaveBeenCalledWith(1);
  });
});
