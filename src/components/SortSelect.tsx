export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <label className="select-field" aria-label="Sort products">
      <span className="input-label">Sort</span>
      <select value={value} onChange={(event) => onChange(event.target.value as SortOption)}>
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Rating: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
    </label>
  );
}

export default SortSelect;
