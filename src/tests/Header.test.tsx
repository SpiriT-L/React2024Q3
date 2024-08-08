import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Footer from '../components/Page/Footer/Footer';
import { expect, test } from 'vitest';

test('renders Footer component with links and images', () => {
  render(<Footer />);

  const discordLink = screen.getByRole('link', { name: /discord/i });
  const rssLink = screen.getByRole('link', { name: /rs school/i });
  const githubLink = screen.getByRole('link', { name: /github/i });

  expect(discordLink).toBeInTheDocument();
  expect(rssLink).toBeInTheDocument();
  expect(githubLink).toBeInTheDocument();

  const discordImg = screen.getByAltText('Discord');
  const rssImg = screen.getByAltText('RS School');
  const githubImg = screen.getByAltText('GitHub');

  expect(discordImg).toBeInTheDocument();
  expect(rssImg).toBeInTheDocument();
  expect(githubImg).toBeInTheDocument();
});
