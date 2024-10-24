import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import "@/public/css/style.css";

export const metadata = {
  title:
    "Rahul Yadav | Building Digital Dreams: Crafting Web Wonders as a Full Stack Developer",
  description:
    "Rahul Yadav | Building Digital Dreams: Crafting Web Wonders as a Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <main className="relative z-1">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
