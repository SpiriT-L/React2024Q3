import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageHome from '../../app/page';
import { describe, it, expect } from 'vitest';

describe('PageHome Component', () => {
  it('should render the Home component', () => {
    const { container } = render(<PageHome />);
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
