import React, { useState } from "react";

export default function SearchBar({ handleTerm }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term) return;

    handleTerm(term); // passing the term to the parent
    console.log("Form being submitted!");
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        placeholder="Search your images"
      />

      <button type="submit">Search Images</button>
    </form>
  );
}
