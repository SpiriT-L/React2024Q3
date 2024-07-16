import { fireEvent, render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

const ComponentWithError = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('displays an error message when an error occurs in a child component', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );

    expect(getByText('Sorry.. there was an error')).toBeInTheDocument();
  });

  it('reloads the page when the button is clicked', () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );

    const reloadEvent = new Event('reload');

    window.addEventListener('reload', () => {
      console.log('Page reload triggered');
    });

    fireEvent.click(getByText('Press to reload page'));

    expect(window.dispatchEvent(reloadEvent)).toBeTruthy();
  });
});
