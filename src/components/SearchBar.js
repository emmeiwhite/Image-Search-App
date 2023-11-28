import React, { useState } from "react";
import "./SearchBar.css"; // Import the CSS file

export default function SearchBar({ handleTerm }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term) return;

    handleTerm(term);
    console.log("Form being submitted!");
    setTerm("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="search-form"
    >
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        placeholder="Search your images"
        className="search-input"
      />

      <button
        type="submit"
        className="search-button"
      >
        Search Images
      </button>
    </form>
  );
}
