import React from 'react';

const LanguageFilter = ({ languageFilter, setLanguageFilter }) => {
  return (
    <div>
      <label htmlFor="language">Language:</label>
      <input
        type="text"
        id="language"
        placeholder="Enter language"
        value={languageFilter}
        onChange={(e) => setLanguageFilter(e.target.value)}
      />
    </div>
  );
};

export default LanguageFilter;