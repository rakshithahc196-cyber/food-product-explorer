import { formatCategory } from '../utils/formatters';

interface CategoryFilterProps {
  value: string;
  categories: string[];
  onChange: (category: string) => void;
}

function CategoryFilter({ value, categories, onChange }: CategoryFilterProps) {
  return (
    <label className="select-field" aria-label="Filter by category">
      <span className="input-label">Category</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {formatCategory(category)}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CategoryFilter;
