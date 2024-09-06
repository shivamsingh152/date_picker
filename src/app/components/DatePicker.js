"use client";

import useDateStore from '../store/store';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import PreviewCalendar from './PreviewCalendar';
import '../datepicker.css';

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDateStore();

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Date Picker</h1>
      
      <div className="mb-4">
        <label className="block text-lg mb-2">Select Dates</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      
      <div className="recurrence-options">
        <RecurrenceOptions />
      </div>

      <div className="recurrence-customization">
        <RecurrenceCustomization />
      </div>
      
      <div className="preview-calendar">
        <PreviewCalendar />
      </div>

    </div>
  );
};

export default DatePicker;