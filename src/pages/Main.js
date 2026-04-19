import { useState } from "react";
import { movieData } from "../data/movies";

function Main() {
  // 1. Setup our State
  const [movies] = useState(movieData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  // 2. Apply filtering based on the search term
  let displayedMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Apply sorting based on the dropdown selection
  if (sortOption === "rating") {
    // Sort by rating (Highest first)
    displayedMovies.sort((a, b) => b.rating - a.rating); 
  } else if (sortOption === "year-new") {
    // Sort by year (Newest first)
    displayedMovies.sort((a, b) => b.year - a.year); 
  } else if (sortOption === "year-old") {
    // Sort by year (Oldest first)
    displayedMovies.sort((a, b) => a.year - b.year); 
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Catalog</h1>
      
      {/* 4. The Interactive Controls */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <input 
          type="text" 
          placeholder="Search movies by title..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "10px", width: "250px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        
        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        >
          <option value="">Sort By...</option>
          <option value="rating">Rating (High to Low)</option>
          <option value="year-new">Year (Newest)</option>
          <option value="year-old">Year (Oldest)</option>
        </select>
      </div>
      
      {/* 5. The Movie List (Now using displayedMovies instead of movies) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {displayedMovies.map((movie) => (
          <div 
            key={movie.id} 
            style={{ 
              border: "1px solid #ccc", 
              padding: "15px", 
              borderRadius: "8px",
              backgroundColor: "#f9f9f9"
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>{movie.title} ({movie.year})</h3>
            <p style={{ margin: "0" }}>
              <strong>Genre:</strong> {movie.genre} | <strong>Rating:</strong> {movie.rating} ⭐
            </p>
          </div>
        ))}
        
        {/* If the search result is empty, show a message */}
        {displayedMovies.length === 0 && (
          <p style={{ color: "red", fontWeight: "bold" }}>No movies match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Main;