import "../styles/globals.css";

export const metadata = {
  title: "IKIS Home",
  description: "Beautifully Curated Living."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
