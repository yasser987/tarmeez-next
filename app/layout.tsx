import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            backgroundColor: "teal",
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            padding: "15px",
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/articles/featuredArticles">Featured Articles</Link>
          <Link href="/posts">Posts</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
