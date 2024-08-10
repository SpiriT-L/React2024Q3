import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Err from '../components/ErrorBoundary/Error';

describe('Err', () => {
  it('should throw an error when errFunc is called', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    expect(() => render(<Err />)).toThrow('Error!!!');
    consoleError.mockRestore();
  });

  it('should render correctly', () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    try {
      render(<Err />);
    } catch (e) {}
    expect(document.querySelector('div')).toBeInTheDocument();
    consoleError.mockRestore();
  });
});
