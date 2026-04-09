import { useState, useEffect } from "react";
import CourseList from "./components/CourseList";
import Filters from "./components/Filters";
import data from "./data/courses.json";
import "./App.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setCourses(data);
    setFilterData(data);
  }, []);

  useEffect(() => {
    let result = courses;

    if (search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      result = result.filter((item) => item.category === category);
    }

    setFilterData(result);
    setCurrentPage(1);
  }, [search, category, courses]);

  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filterData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="App-container">
      <header className="App-header">
        <h1>🎓 Course Directory</h1>
        <p className="header-subtitle">Explore our comprehensive course collection</p>
      </header>

      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <CourseList data={paginatedData} />

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ← Previous
          </button>
          <div className="pagination-info">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next →
          </button>
        </div>
      )}

      {filterData.length === 0 && (
        <div className="no-courses">
          <p>No courses found matching your criteria</p>
        </div>
      )}
    </div>
  );
}

export default App;