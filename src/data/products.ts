export type ProductCategory =
  | "Furniture"
  | "Lighting"
  | "Décor"
  | "Kitchenware"
  | "Dining"
  | "IKIS Kids"
  | "Outdoor"
  | "Mirrors"
  | "Rugs"
  | "Art"
  | "Storage"
  | "Bath";

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
  "Kitchenware",
  "IKIS Kids",
  "Outdoor",
  "Mirrors",
  "Rugs",
  "Art",
  "Storage",
  "Bath",
] as const;

export const products: Product[] = [

  // ============================================================
  // FURNITURE
  // ============================================================

  {
    id: "curved-linen-sofa",
    name: "Curved Linen Sofa",
    category: "Furniture",
    price: 28990,
    image: "/images/products/furniture/curved-linen-sofa.jpg",
    description: "Soft contemporary curved sofa upholstered in premium linen.",
  },

  {
    id: "sculptural-accent-chair",
    name: "Sculptural Accent Chair",
    category: "Furniture",
    price: 12890,
    image: "/images/products/furniture/sculptural-accent-chair.jpg",
    description: "Elegant occasional chair with sculptural contemporary form.",
  },

  {
    id: "siki-bed",
    name: "Siki Bed",
    category: "Furniture",
    price: 18990,
    image: "/images/products/furniture/siki_bed.jpg",
    description: "Luxury oak upholstered platform bed designed for calm bedrooms.",
  },

  // ============================================================
  // LIGHTING
  // ============================================================

  {
    id: "arden-oak-table-lamp",
    name: "Arden Oak Table Lamp",
    category: "Lighting",
    price: 3890,
    image: "/images/products/lighting/Arden_oak_table_lamp.jpg",
    description: "Solid oak table lamp with warm linen shade.",
  },

  {
    id: "aster-travertine-table-lamp",
    name: "Aster Travertine Table Lamp",
    category: "Lighting",
    price: 4290,
    image: "/images/products/lighting/Aster_travertine_table_lamp.jpg",
    description: "Hand-finished travertine lamp for timeless interiors.",
  },

  {
    id: "siena-ceramic-table-lamp",
    name: "Siena Ceramic Table Lamp",
    category: "Lighting",
    price: 3790,
    image: "/images/products/lighting/Siena_ceramic_table_lamp.jpg",
    description: "Minimal ceramic lamp finished in warm ivory glaze.",
  },

  // ============================================================
  // KITCHENWARE — SERVEWARE
  // ============================================================

  {
    id: "large-travertine-serving-board",
    name: "Large Travertine Serving Board",
    category: "Kitchenware",
    price: 1590,
    image: "/images/products/kitchenware/Serveware/Large-Travertine-Serving-Board.jpg",
    description: "Solid travertine serving board for entertaining.",
  },

  {
    id: "round-marble-serving-board",
    name: "Round Marble Serving Board",
    category: "Kitchenware",
    price: 1390,
    image: "/images/products/kitchenware/Serveware/Round-Marble-Serving-Board.jpg",
    description: "Round marble board perfect for cheese and desserts.",
  },

  {
    id: "travertine-cake-stand",
    name: "Travertine Cake Stand",
    category: "Kitchenware",
    price: 1990,
    image: "/images/products/kitchenware/Serveware/Travertine-Cake-Stand.jpg",
    description: "Luxury pedestal stand carved from natural travertine.",
  },

  {
    id: "oak-serving-tray",
    name: "Oak Serving Tray",
    category: "Kitchenware",
    price: 1290,
    image: "/images/products/kitchenware/Serveware/Oak-Serving-Tray.jpg",
    description: "Solid oak serving tray with integrated handles.",
  },

  {
    id: "stone-lazy-susan",
    name: "Stone Lazy Susan",
    category: "Kitchenware",
    price: 1890,
    image: "/images/products/kitchenware/Serveware/Stone-Lazy-Susan.jpg",
    description: "Rotating stone serving platter for elegant tables.",
  },

  // ============================================================
  // KITCHENWARE — BOWLS
  // ============================================================

  {
    id: "large-travertine-fruit-bowl",
    name: "Large Travertine Fruit Bowl",
    category: "Kitchenware",
    price: 2490,
    image: "/images/products/kitchenware/Bowls/Large-Travertine-Fruit-Bowl.jpg",
    description: "Statement fruit bowl carved from premium travertine.",
  },

  {
    id: "ceramic-salad-bowl",
    name: "Ceramic Salad Bowl",
    category: "Kitchenware",
    price: 990,
    image: "/images/products/kitchenware/Bowls/Ceramic-Salad-Bowl.jpg",
    description: "Large handcrafted ceramic serving bowl.",
  },

  {
    id: "nested-ceramic-bowl-set",
    name: "Nested Ceramic Bowl Set",
    category: "Kitchenware",
    price: 1490,
    image: "/images/products/kitchenware/Bowls/Nested-Ceramic-Bowl-Set.jpg",
    description: "Versatile nesting bowls for everyday dining.",
  },

  {
    id: "stone-snack-bowl-set",
    name: "Stone Snack Bowl Set",
    category: "Kitchenware",
    price: 890,
    image: "/images/products/kitchenware/Bowls/Stone-Snack-Bowl-Set.jpg",
    description: "Stone serving bowls ideal for snacks and tapas.",
  },  // ============================================================
  // KITCHENWARE — CANISTERS
  // ============================================================

  {
    id: "travertine-kitchen-canister",
    name: "Travertine Kitchen Canister",
    category: "Kitchenware",
    price: 1090,
    image: "/images/products/kitchenware/Canisters/Travertine-kitchen-canister.jpg",
    description: "Minimal cylindrical travertine kitchen canister with matching stone lid.",
  },

  {
    id: "oak-storage-canister",
    name: "Oak Storage Canister",
    category: "Kitchenware",
    price: 990,
    image: "/images/products/kitchenware/Canisters/oak_storage_canisters.jpg",
    description: "Solid oak storage canister with precision flush lid.",
  },

  {
    id: "ceramic-pantry-canisters",
    name: "Ceramic Pantry Canisters",
    category: "Kitchenware",
    price: 1690,
    image: "/images/products/kitchenware/Canisters/ceramic_pantry_canisters.jpg",
    description: "Three handcrafted ceramic pantry canisters in warm matte ivory.",
  },

  {
    id: "ceramic-pantry-canisters-alt",
    name: "Ceramic Pantry Canisters II",
    category: "Kitchenware",
    price: 1690,
    image: "/images/products/kitchenware/Canisters/ceramic_pantry_canisters1.jpg",
    description: "Luxury ceramic pantry storage collection with contemporary proportions.",
  },

  // ============================================================
  // KITCHENWARE — DRINKWARE
  // ============================================================

  {
    id: "handblown-glass-carafe",
    name: "Handblown Glass Carafe",
    category: "Kitchenware",
    price: 1290,
    image: "/images/products/kitchenware/Drinkware/handlown_glass_carafe.jpg",
    description: "Handblown crystal-clear glass carafe with subtle organic character.",
  },

  {
    id: "double-wall-glasses",
    name: "Double Wall Glasses",
    category: "Kitchenware",
    price: 890,
    image: "/images/products/kitchenware/Drinkware/double_wall_glasses.jpg",
    description: "Minimal double-wall drinking glasses with floating appearance.",
  },

  {
    id: "luxury-water-jug",
    name: "Luxury Water Jug",
    category: "Kitchenware",
    price: 1390,
    image: "/images/products/kitchenware/Drinkware/luxury_water_jug.jpg",
    description: "Elegant clear-glass water jug with sculptural soft curves.",
  },

  // ============================================================
  // IKIS KIDS
  // ============================================================

  {
    id: "grow-with-me-bed",
    name: "Grow With Me Children's Bed",
    category: "IKIS Kids",
    price: 8990,
    image: "/images/products/Ikis-kids/Grow with me children's bed in oak.jpg",
    description: "Timeless Montessori-inspired oak bed designed to grow from toddler to teen.",
  },

  {
    id: "scandinavian-childrens-bed",
    name: "Scandinavian Children's Bed",
    category: "IKIS Kids",
    price: 7990,
    image: "/images/products/Ikis-kids/Scandinavian Style Children's Bed in Oak.jpg",
    description: "Minimal Scandinavian oak children's bed with heirloom craftsmanship.",
  },

  {
    id: "cloud-shelf",
    name: "Cloud Shelf",
    category: "IKIS Kids",
    price: 890,
    image: "/images/products/Ikis-kids/Cloud-Shelf.jpg",
    description: "Solid oak cloud shelf for storybooks and treasured keepsakes.",
  },

  {
    id: "wave-bookshelf",
    name: "Wave Bookshelf",
    category: "IKIS Kids",
    price: 1890,
    image: "/images/products/Ikis-kids/Wave-Bookshelf.jpg",
    description: "Contemporary wave bookshelf encouraging independent reading.",
  },

  {
    id: "house-wardrobe",
    name: "House Wardrobe",
    category: "IKIS Kids",
    price: 5990,
    image: "/images/products/Ikis-kids/House_Wardrobe.jpg",
    description: "Montessori-inspired open wardrobe crafted from solid oak.",
  },

  {
    id: "house-wardrobe-2",
    name: "House Wardrobe II",
    category: "IKIS Kids",
    price: 6290,
    image: "/images/products/Ikis-kids/House_Wardrobe2.jpg",
    description: "Refined children's wardrobe with playful architectural silhouette.",
  },

  {
    id: "learning-chair",
    name: "Learning Chair",
    category: "IKIS Kids",
    price: 1490,
    image: "/images/products/Ikis-kids/Learning-Chair.jpg",
    description: "Ergonomic oak learning chair inspired by Montessori principles.",
  },

  {
    id: "oak-toy-chest",
    name: "Oak Toy Chest",
    category: "IKIS Kids",
    price: 3290,
    image: "/images/products/Ikis-kids/Oak-Toy-Chest.jpg",
    description: "Luxury oak toy chest with soft-close lid and generous storage.",
  },

  {
    id: "step-stool",
    name: "Step Stool",
    category: "IKIS Kids",
    price: 890,
    image: "/images/products/Ikis-kids/Step-Stool.jpg",
    description: "Solid oak Montessori step stool encouraging independence.",
  },

  {
    id: "animal-wall-hooks",
    name: "Animal Wall Hooks",
    category: "IKIS Kids",
    price: 590,
    image: "/images/products/Ikis-kids/Animal-Wall-Hooks.jpg",
    description: "Playful handcrafted oak wall hooks for children's rooms.",
  },  {
    id: "play-rug",
    name: "Play Rug",
    category: "IKIS Kids",
    price: 1990,
    image: "/images/products/Ikis-kids/Play-Rug.jpg",
    description: "Soft natural play rug designed for imaginative everyday play.",
  },

  {
    id: "minimal-linen-bedding",
    name: "Minimal Linen Bedding",
    category: "IKIS Kids",
    price: 1690,
    image: "/images/products/Ikis-kids/Minimal-Linen-Bedding.jpg",
    description: "Premium washed linen bedding in warm neutral tones.",
  },

  {
    id: "chunky-knit-blanket",
    name: "Chunky Knit Blanket",
    category: "IKIS Kids",
    price: 1490,
    image: "/images/products/Ikis-kids/Chunky knit blanket.jpg",
    description: "Luxury oversized chunky knit blanket for year-round comfort.",
  },

  {
    id: "soft-beige-wool-throw",
    name: "Soft Beige Wool Throw",
    category: "IKIS Kids",
    price: 1390,
    image: "/images/products/Ikis-kids/Soft Beige Wool Throw with Tassels.jpg",
    description: "Premium wool throw finished with elegant hand-tied tassels.",
  },

  {
    id: "rainbow-canopy",
    name: "Rainbow Canopy",
    category: "IKIS Kids",
    price: 2190,
    image: "/images/products/Ikis-kids/Rainbow-Canopy.jpg",
    description: "Soft flowing canopy creating a calm reading and sleeping space.",
  },

  {
    id: "keepsake-box",
    name: "Keepsake Box",
    category: "IKIS Kids",
    price: 890,
    image: "/images/products/Ikis-kids/Keepsake-Box.jpg",
    description: "Timeless wooden keepsake box for treasured childhood memories.",
  },

  {
    id: "growth-chart",
    name: "Growth Chart",
    category: "IKIS Kids",
    price: 690,
    image: "/images/products/Ikis-kids/Growth-Chart.jpg",
    description: "Minimal wooden growth chart celebrating every milestone.",
  },

  {
    id: "growth-chart-room",
    name: "Growth Chart Room Display",
    category: "IKIS Kids",
    price: 690,
    image: "/images/products/Ikis-kids/Growth-Chart-room.jpg",
    description: "Editorial growth chart styled for modern children's rooms.",
  },

  {
    id: "travertine-night-light",
    name: "Travertine Night Light",
    category: "IKIS Kids",
    price: 1190,
    image: "/images/products/Ikis-kids/Travertine-Night-Light.jpg",
    description: "Soft ambient night light crafted from natural travertine.",
  },

  {
    id: "woven-basket",
    name: "Woven Basket",
    category: "IKIS Kids",
    price: 790,
    image: "/images/products/Ikis-kids/Woven-Baskets.jpg",
    description: "Handwoven storage basket for toys, blankets and books.",
  },

  // ============================================================
  // PLACEHOLDERS
  // ============================================================

  {
    id: "mirror-placeholder",
    name: "Luxury Mirrors",
    category: "Mirrors",
    price: 0,
    image: "/images/placeholders/coming-soon.jpg",
    description: "Coming Soon",
  },

  {
    id: "rug-placeholder",
    name: "Luxury Rugs",
    category: "Rugs",
    price: 0,
    image: "/images/placeholders/coming-soon.jpg",
    description: "Coming Soon",
  },

  {
    id: "art-placeholder",
    name: "Wall Art",
    category: "Art",
    price: 0,
    image: "/images/placeholders/coming-soon.jpg",
    description: "Coming Soon",
  },

  {
    id: "storage-placeholder",
    name: "Luxury Storage",
    category: "Storage",
    price: 0,
    image: "/images/placeholders/coming-soon.jpg",
    description: "Coming Soon",
  },

  {
    id: "bath-placeholder",
    name: "Bath Collection",
    category: "Bath",
    price: 0,
    image: "/images/placeholders/coming-soon.jpg",
    description: "Coming Soon",
  },

  {
    id: "outdoor-placeholder",
    name: "Outdoor Collection",
    category: "Outdoor",
    price: 0,
    image: "/images/placeholders/coming-soon.jpg",
    description: "Coming Soon",
  },

];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}