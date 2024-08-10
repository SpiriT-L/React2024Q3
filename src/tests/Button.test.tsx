import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from '../components/Button/Button';

describe('Button component', () => {
  it('renders a button with text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders a custom element with text', () => {
    render(
      <Button as="a" href="#">
        Click me
      </Button>
    );
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe('A');
  });

  it('passes additional props to the element', () => {
    render(<Button data-testid="custom-button">Error</Button>);
    const buttonElement = screen.getByTestId('custom-button');
    expect(buttonElement).toBeInTheDocument();
  });
});
