import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Trinity School of Theology & Mission", template: "%s | TSTM" },
  description: "Christ-centered theological education for faithful service in church and world.",
  icons: {
    icon: "/tstm-logo.jpg",
    shortcut: "/tstm-logo.jpg",
    apple: "/tstm-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
