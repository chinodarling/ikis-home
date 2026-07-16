import type { StaticImageData } from "next/image";

export type KitchenwareCollection = "Serveware" | "Bowls" | "Canisters" | "Drinkware";

export type KitchenwareProduct = {
  id: string;
  name: string;
  collection: KitchenwareCollection;
  price: number;
  description: string;
  images: string[];
  details: string[];
  category: "Kitchenware";
};

export const kitchenwareCollections: KitchenwareCollection[] = [
  "Serveware",
  "Bowls",
  "Canisters",
  "Drinkware",
];

export const kitchenwareProducts: KitchenwareProduct[] = [
  {
    id: "large-travertine-serving-board",
    name: "Large Travertine Serving Board",
    collection: "Serveware",
    price: 3450,
    description: "A sculptural serving board in polished travertine, designed for effortless entertaining and beautiful table styling.",
    images: [
      "/images/products/kitchenware/Collection 1 — Serveware/Large-Travertine-Serving-Board.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Round-Marble-Serving-Board.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Travertine-Cake-Stand.jpg",
    ],
    details: ["Polished travertine stone", "Hand-finished edges", "Ideal for cheese, breads and fruit"],
    category: "Kitchenware",
  },
  {
    id: "round-marble-serving-board",
    name: "Round Marble Serving Board",
    collection: "Serveware",
    price: 2980,
    description: "A warm, softly veined marble board that elevates grazing platters and everyday hosting.",
    images: [
      "/images/products/kitchenware/Collection 1 — Serveware/Round-Marble-Serving-Board.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Large-Travertine-Serving-Board.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Oak-Serving-Tray.jpg",
    ],
    details: ["Softly veined marble", "Low-profile shape", "Food-safe finish"],
    category: "Kitchenware",
  },
  {
    id: "travertine-cake-stand",
    name: "Travertine Cake Stand",
    collection: "Serveware",
    price: 2320,
    description: "An elegant stand for pastries, desserts and candles, finished with tactile stone texture.",
    images: [
      "/images/products/kitchenware/Collection 1 — Serveware/Travertine-Cake-Stand.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Large-Travertine-Serving-Board.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Oak-Serving-Tray.jpg",
    ],
    details: ["Textured travertine base", "Compact footprint", "Perfect for display"],
    category: "Kitchenware",
  },
  {
    id: "oak-serving-tray",
    name: "Oak Serving Tray",
    collection: "Serveware",
    price: 2140,
    description: "A handcrafted oak tray with a pared-back form made for modern table service.",
    images: [
      "/images/products/kitchenware/Collection 1 — Serveware/Oak-Serving-Tray.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Large-Travertine-Serving-Board.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Round-Marble-Serving-Board.jpg",
    ],
    details: ["Solid oak construction", "Hand-rubbed finish", "Balanced everyday use"],
    category: "Kitchenware",
  },
  {
    id: "stone-lazy-susan",
    name: "Stone Lazy Susan",
    collection: "Serveware",
    price: 2560,
    description: "A refined rotating centrepiece for condiments, fruits and table styling moments.",
    images: [
      "/images/products/kitchenware/Collection 1 — Serveware/Stone-Lazy-Susan.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Large-Travertine-Serving-Board.jpg",
      "/images/products/kitchenware/Collection 1 — Serveware/Travertine-Cake-Stand.jpg",
    ],
    details: ["Smooth stone base", "Easy turn mechanism", "Soft sculptural profile"],
    category: "Kitchenware",
  },
  {
    id: "large-travertine-fruit-bowl",
    name: "Large Travertine Fruit Bowl",
    collection: "Bowls",
    price: 2680,
    description: "A generous bowl in tactile travertine for fruit, flowers or everyday objects.",
    images: [
      "/images/products/kitchenware/Collection 2 — Bowls/Large-Travertine-Fruit-Bowl.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Ceramic-Salad-Bowl.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Stone-Snack-Bowl-Set.jpg",
    ],
    details: ["Substantial travertine form", "Natural surface variation", "Statement centrepiece"],
    category: "Kitchenware",
  },
  {
    id: "ceramic-salad-bowl",
    name: "Ceramic Salad Bowl",
    collection: "Bowls",
    price: 1420,
    description: "An understated ceramic bowl for salads, grains and family dinners.",
    images: [
      "/images/products/kitchenware/Collection 2 — Bowls/Ceramic-Salad-Bowl.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Large-Travertine-Fruit-Bowl.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Nested-Ceramic-Bowl-Set.jpg",
    ],
    details: ["Hand-finished glaze", "Smooth interior", "Perfect for daily use"],
    category: "Kitchenware",
  },
  {
    id: "nested-ceramic-bowl-set",
    name: "Nested Ceramic Bowl Set",
    collection: "Bowls",
    price: 1890,
    description: "A refined nesting set for pantry storage, serving or layered styling.",
    images: [
      "/images/products/kitchenware/Collection 2 — Bowls/Nested-Ceramic-Bowl-Set.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Ceramic-Salad-Bowl.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Stone-Snack-Bowl-Set.jpg",
    ],
    details: ["Three-piece nesting set", "Warm neutral glaze", "Space-saving form"],
    category: "Kitchenware",
  },
  {
    id: "stone-snack-bowl-set",
    name: "Stone Snack Bowl Set",
    collection: "Bowls",
    price: 1760,
    description: "A compact set of stone bowls for everyday snacks and table styling.",
    images: [
      "/images/products/kitchenware/Collection 2 — Bowls/Stone-Snack-Bowl-Set.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Large-Travertine-Fruit-Bowl.jpg",
      "/images/products/kitchenware/Collection 2 — Bowls/Nested-Ceramic-Bowl-Set.jpg",
    ],
    details: ["Stoneware construction", "Set of four", "Ideal for entertaining"],
    category: "Kitchenware",
  },
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}
