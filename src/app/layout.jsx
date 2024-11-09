import { Cursor, Navbar } from "@/components";
import "@/static/css/style.css";

export const metadata = {
  title: "Rahul Yadav - Portfolio",
  description: "Rahul Yadav - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Cursor />
        <main className="relative z-1">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
