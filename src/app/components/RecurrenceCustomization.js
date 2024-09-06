"use client";

import { useState } from 'react';
import useDateStore from '../store/store';

const RecurrenceCustomization = () => {
  const { setRecurringCustomization } = useDateStore();
  const [interval, setInterval] = useState(1);

  const handleIntervalChange = (e) => {
    const value = parseInt(e.target.value);
    setInterval(value);
    setRecurringCustomization(value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Recurrence Customization</h2>
      <div className="flex flex-col space-y-3">
        <label className="text-sm font-medium text-gray-700">Every</label>
        <input
          type="number"
          value={interval}
          onChange={handleIntervalChange}
          min="1"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <span className="text-sm text-gray-500">days/weeks/months/years</span>
      </div>
    </div>
  );
};

export default RecurrenceCustomization;