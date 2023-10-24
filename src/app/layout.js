import "./globals.css";

export const metadata = {
  title: "LaiLaoLabBand",
  description: "Dev Tour Lao Final",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
