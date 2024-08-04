import { Metadata } from 'next';
import favicon from '../../public/favicon.png';

export const metadata: Metadata = {
  title: 'Rick & Morty',
  description: 'Rick & Morty',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href={favicon.src} />
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
