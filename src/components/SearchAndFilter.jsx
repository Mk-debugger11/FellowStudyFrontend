import { Search } from "lucide-react";
import { useState } from "react";

const categories = ["Engineering", "MBA", "Medical", "Arts", "Commerce", "Science"];

const SearchAndFilter = () => {
  const [query, setQuery] = useState("");
  const [college, setCollege] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Search & Filter</h2>

      {/* Search Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        {/* Search Input */}
        <div className="flex items-center w-full max-w-md border rounded-lg px-4 py-2 text-gray-500 border-gray-300">
          <Search className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search by college, product name, or title..."
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Dropdown */}
        <select
          className="w-full md:w-60 px-4 py-2 border border-gray-300 rounded-lg text-gray-800"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        >
          <option value="">Filter by College</option>
          <option value="IIT">IIT</option>
          <option value="NIT">NIT</option>
          <option value="BITS">BITS</option>
        </select>

        {/* Search Button */}
        <button
          className="px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-green-500 hover:opacity-90 transition"
          onClick={() => {
            console.log({ query, college, selectedCategory });
          }}
        >
          Search
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition font-medium ${
              selectedCategory === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-900 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SearchAndFilter;
