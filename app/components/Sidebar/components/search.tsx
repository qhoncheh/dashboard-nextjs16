import { FiCommand, FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="relative p-2">
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />

      <input
        type="text"
        placeholder="Search..."
        className="w-full py-1.5 pl-8 pr-6 bg-stone-100 rounded-2xl border border-stone-300 
                   focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
                   transition-all placeholder:text-stone-400"
      />

      <kbd className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-1.5 py-1 
                      text-xs font-medium text-stone-600 bg-stone-200/80 rounded-xl shadow-sm border border-stone-300">
        <FiCommand className="text-sm" />
        K
      </kbd>
    </div>
  );
};

export default Search;