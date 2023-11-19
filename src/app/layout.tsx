import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export const metadata: Metadata = {
  title: "ttcc",
  description: "Image gallery and user data submit form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <div className="border-b">
          <div className="flex h-16 items-center px-4 mx-auto">
            <Navbar />
          </div>
        </div>

        <div className="flex">
          <Sidebar />
          <div className="w-full px-4 pt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
