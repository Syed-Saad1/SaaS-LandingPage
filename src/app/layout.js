import "./globals.css";
import { nunito } from "./fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
