import { Cursor, Navbar } from "@/components";
import Footer from "@/components/Footer";
import "@/static/css/style.css";

export const metadata = {
  title: "Rahul Yadav - Portfolio",
  description: "Rahul Yadav - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <main className="relative z-1">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
