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
      {/* <head>
        <link rel="icon" type="image/svg+xml" href="/icons8-color-96.png" />
      </head> */}
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
