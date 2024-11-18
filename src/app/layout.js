import { Inter, Public_Sans } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
// import ClientSideProviderTest from "@/components/clientSideProviderTest";

const inter = Inter({ subsets: ["latin"] });
const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${publicSans.className}`}>
        {/* <ClientSideProviderTest> */}
            <Navbar />
            {children}
            <Footer />
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
