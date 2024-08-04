import { Metadata } from 'next';

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
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}