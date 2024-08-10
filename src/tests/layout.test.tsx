import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RootLayout from '../../app/layout';

describe('RootLayout', () => {
  it('renders Header, Footer, and children', () => {
    render(
      <RootLayout>
        <div data-testid="child">Child Content</div>
      </RootLayout>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
