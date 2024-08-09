import { describe, it, expect, vi } from 'vitest';
import { changeCssVariables } from '../services/changeCssVariables';

describe('changeCssVariables', () => {
  it('should change CSS variables based on theme', () => {
    const root = document.createElement('div');
    root.setAttribute('style', '');
    vi.spyOn(document, 'querySelector').mockReturnValue(root);

    changeCssVariables('dark');

    expect(root.style.getPropertyValue('--bg-color-light')).toBe(
      'var(--bg-color-dark)'
    );
    expect(root.style.getPropertyValue('--bg-color-light')).toBe(
      'var(--bg-color-dark)'
    );
    expect(root.style.getPropertyValue('--text-color-light')).toBe(
      'var(--text-color-dark)'
    );
    expect(root.style.getPropertyValue('--search-color-light')).toBe(
      'var(--search-color-dark)'
    );
    expect(root.style.getPropertyValue('--searchText-color-light')).toBe(
      'var(--searchText-color-dark)'
    );
    expect(root.style.getPropertyValue('--placeholder-color-light')).toBe(
      'var(--placeholder-color-dark)'
    );
  });

  it('should not throw error if root is not found', () => {
    vi.spyOn(document, 'querySelector').mockReturnValue(null);
  });
});
