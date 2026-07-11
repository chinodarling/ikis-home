type CategoryFilterProps = {
  categories: readonly string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        padding: "1rem 0 1.25rem",
      }}
    >
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            style={{
              border: isActive ? "1px solid #B98E5F" : "1px solid rgba(34, 34, 34, 0.12)",
              borderRadius: 999,
              background: isActive ? "#F7EBDD" : "#FFFFFF",
              color: isActive ? "#222222" : "#6F675E",
              padding: "0.7rem 1rem",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 180ms ease",
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
