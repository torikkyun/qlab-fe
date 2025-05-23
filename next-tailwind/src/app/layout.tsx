import type { Metadata } from "next";
import "./globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Sidebar from "@/components/Sidebar"; 

export const metadata: Metadata = {
  title: "QLAB",
  description: "Quản lý phòng lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen">
          {/* Header */}
          <header className="bg-green-200 p-4 row-start-1 row-end-2 col-span-1 text-center text-xl font-semibold">
            Header
          </header>
          {/* Main content area */}
          <div className="grid grid-cols-[250px_1fr] gap-8 bg-blue-200 row-start-2 row-end-3 col-span-1 flex-1">
            {/* Sidebar */}
            <aside className="bg-gray-100 shadow-md">
              <Sidebar />
            </aside>
            {/* Main content */}
            <main className="flex items-center justify-center">{children}</main>
          </div>
          {/* Footer */}
          <footer className="bg-red-200 p-4 row-start-3 row-end-4 col-span-1 text-center">
            Footer
          </footer>
        </div>
      </body>
    </html>
  );
}
