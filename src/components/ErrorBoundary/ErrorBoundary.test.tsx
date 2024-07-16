import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ErrorBoundary>
        <div>Test</div>
      </ErrorBoundary>
    );
    expect(container).toBeInTheDocument();
  });

  it('displays an error message when a child component throws', () => {
    const ChildComponent = () => {
      throw new Error('Test error');
    };

    const { getByText } = render(
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    );

    expect(getByText('Sorry.. there was an error')).toBeInTheDocument();
    expect(getByText('Press to reload page')).toBeInTheDocument();
  });
});
