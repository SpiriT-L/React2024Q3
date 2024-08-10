import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ErrorPage from '../components/ErrorPage/ErrorPage';

describe('ErrorPage', () => {
  it('renders error message when passed an Error object', () => {
    const error = new Error('This is a test error');
    render(<ErrorPage error={error} />);

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Sorry, an unexpected error has occurred/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/This is a test error/i)).toBeInTheDocument();
  });

  it('renders default message when passed a string', () => {
    const errorString = 'This is a string error';
    render(<ErrorPage error={errorString} />);

    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
    expect(screen.getByText(/Something went wrong./i)).toBeInTheDocument();
  });

  it('logs error message to console if it is an instance of Error', () => {
    const error = new Error('Console error test');
    console.error = vi.fn();

    render(<ErrorPage error={error} />);
    expect(console.error).toHaveBeenCalledWith(error);
  });

  it('logs unknown error to console if it is not an instance of Error', () => {
    const errorString = 'Unknown error';
    console.error = vi.fn();

    render(<ErrorPage error={errorString} />);
    expect(console.error).toHaveBeenCalledWith('Unknown error:', errorString);
  });
});
