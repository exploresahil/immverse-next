import { useEffect } from "react";
import Header from "./Header";
import initializeAOS from "../lib/aos";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <html lang="en">
      <body className="theme-light">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
