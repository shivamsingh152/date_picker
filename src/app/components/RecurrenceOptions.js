"use client";

import useDateStore from '../store/store';

const RecurrenceOptions = () => {
  const { setRecurringPattern } = useDateStore();

  const handlePatternChange = (e) => {
    setRecurringPattern(e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Recurrence Pattern</h2>
      <div className="flex flex-col space-y-3">
        <label className="text-sm font-medium text-gray-700">Select Recurrence</label>
        <select
          onChange={handlePatternChange}
          className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
    </div>
  );
};

export default RecurrenceOptions;