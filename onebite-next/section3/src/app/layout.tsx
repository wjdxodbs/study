import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container max-w-2xl min-h-screen mx-auto bg-white px-4 shadow-[0_0_10px_rgba(100,100,111,0.2)]">
          <header className="font-bold text-lg h-14 leading-14 ">
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <footer className="h-20 leading-20 text-gray-400">
            제작 @winterlood
          </footer>
        </div>
      </body>
    </html>
  );
}
