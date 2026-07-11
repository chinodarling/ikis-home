export type ProductCategory = "Furniture" | "Lighting" | "Décor" | "Kitchen" | "Dining" | "Outdoor";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
};

export const productCategories = [
  "All",
  "Furniture",
  "Lighting",
  "Décor",
  "Kitchen",
  "Dining",
  "Outdoor",
] as const;

const realProductImages = [
  "/images/products/kitchenware/Collection 1 — Serveware/Large-Travertine-Serving-Board.jpg",
  "/images/products/kitchenware/Collection 1 — Serveware/Round-Marble-Serving-Board.jpg",
  "/images/products/kitchenware/Collection 1 — Serveware/Travertine-Cake-Stand.jpg",
  "/images/products/kitchenware/Collection 1 — Serveware/Oak-Serving-Tray.jpg",
  "/images/products/kitchenware/Collection 1 — Serveware/Stone-Lazy-Susan.jpg",
  "/images/products/kitchenware/Collection 2 — Bowls/Large-Travertine-Fruit-Bowl.jpg",
  "/images/products/kitchenware/Collection 2 — Bowls/Ceramic-Salad-Bowl.jpg",
  "/images/products/kitchenware/Collection 2 — Bowls/Nested-Ceramic-Bowl-Set.jpg",
  "/images/products/kitchenware/Collection 2 — Bowls/Stone-Snack-Bowl-Set.jpg",
];

export const products: Product[] = [
  {
    id: "travertine-table-lamp",
    name: "Travertine Table Lamp",
    category: "Lighting",
    price: 2890,
    image: realProductImages[0],
    description: "Hand-finished travertine base with a soft linen shade.",
  },
  {
    id: "oak-dining-chair",
    name: "Oak Dining Chair",
    category: "Dining",
    price: 2490,
    image: realProductImages[1],
    description: "Solid oak frame with a sculpted upholstered seat.",
  },
  {
    id: "stone-vase",
    name: "Stone Vase",
    category: "Décor",
    price: 1850,
    image: realProductImages[2],
    description: "A softly textured vase for sculptural floral arrangements.",
  },
  {
    id: "linen-throw",
    name: "Linen Throw",
    category: "Décor",
    price: 1290,
    image: realProductImages[3],
    description: "Woven linen in a warm stone palette for layered comfort.",
  },
  {
    id: "ceramic-mug-set",
    name: "Ceramic Mug Set",
    category: "Kitchen",
    price: 980,
    image: realProductImages[4],
    description: "A handcrafted set for slow mornings and afternoon tea.",
  },
  {
    id: "marble-tray",
    name: "Marble Tray",
    category: "Décor",
    price: 1650,
    image: realProductImages[5],
    description: "A polished marble tray styled for coffee service or display.",
  },
  {
    id: "walnut-coffee-table",
    name: "Walnut Coffee Table",
    category: "Furniture",
    price: 6890,
    image: realProductImages[6],
    description: "Solid walnut with a softened, architectural silhouette.",
  },
  {
    id: "woven-basket",
    name: "Woven Basket",
    category: "Décor",
    price: 920,
    image: realProductImages[7],
    description: "Natural seagrass detailing with a refined, tactile finish.",
  },
  {
    id: "brass-floor-lamp",
    name: "Brass Floor Lamp",
    category: "Lighting",
    price: 4290,
    image: realProductImages[8],
    description: "A sculptural brass lamp designed for ambient evening glow.",
  },
  {
    id: "rattan-side-table",
    name: "Rattan Side Table",
    category: "Furniture",
    price: 3180,
    image: realProductImages[0],
    description: "An airy silhouette that brings texture to intimate spaces.",
  },
  {
    id: "satin-serve-board",
    name: "Satin Serve Board",
    category: "Kitchen",
    price: 1120,
    image: realProductImages[1],
    description: "A refined board for serving cheese, fruit, and morning bread.",
  },
  {
    id: "olive-wood-cutting-board",
    name: "Olive Wood Cutting Board",
    category: "Kitchen",
    price: 1380,
    image: realProductImages[2],
    description: "A durable heirloom piece finished in warm olive tones.",
  },
  {
    id: "cane-armchair",
    name: "Cane Armchair",
    category: "Furniture",
    price: 5980,
    image: realProductImages[3],
    description: "An elegant armchair crafted for leisurely reading corners.",
  },
  {
    id: "sconce-wall-light",
    name: "Sconce Wall Light",
    category: "Lighting",
    price: 2670,
    image: realProductImages[4],
    description: "A softly diffused wall light for hallways and bedside niches.",
  },
  {
    id: "ceramic-serve-bowl",
    name: "Ceramic Serve Bowl",
    category: "Kitchen",
    price: 890,
    image: realProductImages[5],
    description: "A hand-glazed vessel for sharing everyday meals beautifully.",
  },
  {
    id: "linen-basket",
    name: "Linen Basket",
    category: "Décor",
    price: 760,
    image: realProductImages[6],
    description: "A tactile storage basket with a generous, sculptural form.",
  },
  {
    id: "bouclé-ottoman",
    name: "Bouclé Ottoman",
    category: "Furniture",
    price: 3490,
    image: realProductImages[7],
    description: "A plush ottoman upholstered in a softly textured boucle fabric.",
  },
  {
    id: "garden-planter",
    name: "Garden Planter",
    category: "Outdoor",
    price: 1460,
    image: realProductImages[8],
    description: "A weathered stone planter made for terraces and courtyards.",
  },
  {
    id: "outdoor-lounge-chair",
    name: "Outdoor Lounge Chair",
    category: "Outdoor",
    price: 5120,
    image: realProductImages[0],
    description: "A refined outdoor chair with powder-coated detailing.",
  },
  {
    id: "woven-rug",
    name: "Woven Rug",
    category: "Décor",
    price: 2980,
    image: realProductImages[1],
    description: "A natural fibre rug with a soft, organic weave.",
  },
  {
    id: "marquetry-console",
    name: "Marquetry Console",
    category: "Furniture",
    price: 8420,
    image: realProductImages[2],
    description: "A statement console with rich wood inlay and sculpted legs.",
  },
  {
    id: "glass-pendant",
    name: "Glass Pendant",
    category: "Lighting",
    price: 3120,
    image: realProductImages[3],
    description: "A hand-blown pendant that diffuses light with warmth.",
  },
  {
    id: "dining-bench",
    name: "Dining Bench",
    category: "Dining",
    price: 3680,
    image: realProductImages[4],
    description: "A versatile bench that brings calm structure to the dining room.",
  },
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}
