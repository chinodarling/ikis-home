import { kitchenwareProducts } from "../../../../data/kitchenware";
import KitchenwareProductClient from "./page.client";

export async function generateStaticParams() {
  return kitchenwareProducts.map((product) => ({
    id: product.id,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <KitchenwareProductClient id={id} />;
}