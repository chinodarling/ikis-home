type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: "#6F675E",
        fontSize: 15,
        fontWeight: 600,
      }}
    >
      <span>Sort</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        style={{
          border: "1px solid rgba(34, 34, 34, 0.12)",
          borderRadius: 999,
          background: "#FFFFFF",
          color: "#222222",
          padding: "0.7rem 1rem",
          minWidth: 180,
        }}
      >
        <option value="featured">Featured</option>
        <option value="newest">Newest</option>
        <option value="price-asc">Price Low–High</option>
        <option value="price-desc">Price High–Low</option>
      </select>
    </label>
  );
}
