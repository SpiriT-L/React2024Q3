import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from '../components/Input/Input';

describe('Input', () => {
  it('renders with title', () => {
    render(<Input title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders without title', () => {
    render(<Input title={''} />);
    expect(screen.queryByText('*')).not.toBeInTheDocument();
  });

  it('passes props to input element', () => {
    render(<Input title="Test Title" placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });
});
