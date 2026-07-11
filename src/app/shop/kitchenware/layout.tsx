import { CartProvider } from "../../../components/shop/CartProvider";
import CartDrawer from "../../../components/shop/CartDrawer";

export default function KitchenwareLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
    </CartProvider>
  );
}
