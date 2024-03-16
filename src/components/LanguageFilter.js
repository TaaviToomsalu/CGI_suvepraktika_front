import React from 'react';

const LanguageFilter = ({ languageFilter, setLanguageFilter }) => {
  // Define the list of languages
  const languages = ["English", "Spanish", "French", "German", "Italian"];

  return (
    <div>
      <label htmlFor="language">Language:</label>
      <select
        id="language"
        value={languageFilter}
        onChange={(e) => setLanguageFilter(e.target.value)}
      >
        <option value="">All</option>
        {languages.map((language, index) => (
          <option key={index} value={language}>{language}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageFilter;