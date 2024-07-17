// ErrorPage.test.tsx
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ErrorPageWrapper from './ErrorPageWrapper'; // Use the wrapper component

describe('<ErrorPage />', () => {
  test('renders error message when error is an instance of Error', () => {
    const mockError = new Error('Test error');
    const { getByText } = render(<ErrorPageWrapper routeError={mockError} />);

    expect(getByText(/Sorry, an unexpected error has occurred/i)).toBeTruthy();
    expect(getByText(/Test error/i)).toBeTruthy();
  });

  test('renders generic message when error is not an instance of Error', () => {
    const { getByText } = render(
      <ErrorPageWrapper routeError="Some non-error value" />
    );

    expect(getByText(/Something went wrong/i)).toBeTruthy();
  });
});
