import { CartProvider } from "../../../components/shop/CartProvider";
import KitchenwareCollectionPage from "../../../components/shop/KitchenwareCollectionPage";

export default function KitchenwarePage() {
  return (
    <CartProvider>
      <KitchenwareCollectionPage />
    </CartProvider>
  );
}
