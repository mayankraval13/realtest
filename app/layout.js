export const metadata = {
  title: "My Doc App",
  description: "Google Doc Viewer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
