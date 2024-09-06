"use client";

import useDateStore from '../store/store';

const PreviewCalendar = () => {
  const { recurringDates } = useDateStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Recurring Dates</h2>
      {recurringDates.length > 0 ? (
        <ul className="list-disc pl-5 mt-4 space-y-2">
          {recurringDates.map((date, index) => (
            <li key={index} className="text-gray-700">{date}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No recurring dates to display. Please select start and end dates.</p>
      )}
    </div>
  );
};

export default PreviewCalendar;