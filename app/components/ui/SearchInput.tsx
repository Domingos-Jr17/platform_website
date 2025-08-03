import { useState } from 'react';
import { useDebounce } from '../../../lib/hooks/useDebounce';

export function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce((searchTerm) => {
    // Fazer a busca real
    console.log('Searching for:', searchTerm);
  }, 300);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };
  
  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Buscar seguros..."
      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
    />
  );
}