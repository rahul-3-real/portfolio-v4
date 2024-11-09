import "../static/css/style.css";
import { Cursor } from "../components";

export const metadata = {
  title: "Rahul Yadav - Portfolio",
  description: "Rahul Yadav - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <main>{children}</main>
      </body>
    </html>
  );
}
