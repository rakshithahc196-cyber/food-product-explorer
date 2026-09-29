interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-field" aria-label="Search products by title">
      <span className="input-label">Search</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products by title..."
      />
    </label>
  );
}

export default SearchBar;
