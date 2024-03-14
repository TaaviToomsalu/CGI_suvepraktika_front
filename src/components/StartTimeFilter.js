import React from 'react';

const StartTimeFilter = ({ startTimeFilter, setStartTimeFilter }) => {
  const handleStartTimeChange = (event) => {
    setStartTimeFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="startTime">Start Time:</label>
      <input
        type="time"
        id="startTime"
        value={startTimeFilter}
        onChange={handleStartTimeChange}
      />
    </div>
  );
};

export default StartTimeFilter;