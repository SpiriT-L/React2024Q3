import { render } from '@testing-library/react';
import { vi } from 'vitest';
import ErrorPageWrapper from '../components/ErrorPage/ErrorPageWrapper';

vi.mock('./ErrorPage');

describe('ErrorPageWrapper', () => {
  it('renders ErrorPage with string error', () => {
    const errorString = 'This is a string error';

    render(<ErrorPageWrapper routeError={errorString} />);
  });

  it('renders ErrorPage with Error object', () => {
    const errorObject = new Error('This is an error object');

    render(<ErrorPageWrapper routeError={errorObject} />);
  });
});
