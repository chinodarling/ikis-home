import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { CartProvider } from "../components/shop/CartProvider";
import CartDrawer from "../components/shop/CartDrawer";
import { siteConfig } from "../lib/site";

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="site-shell">
            <Header />
            {children}
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}