import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with the correct text', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders as a different element when "as" prop is provided', () => {
    render(
      <Button as="a" href="#">
        Link
      </Button>
    );
    const linkElement = screen.getByText(/link/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '#');
  });
});
