import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function ApiData() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
        setFilteredData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Search filter logic
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [search, data]);

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading)
    return <p className="text-center text-gray-500">Loading data...</p>;

  if (error)
    return (
      <p className="text-center text-red-500 font-semibold">
        Error: {error}
      </p>
    );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Fetched Posts</h2>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:outline-blue-500"
        />
      </div>

      {paginatedData.length === 0 ? (
        <p className="text-gray-500">No results found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedData.map((post) => (
            <Card key={post.id} title={post.title}>
              <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
            </Card>
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="secondary"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </Button>

        <span className="px-3 py-1">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="secondary"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
