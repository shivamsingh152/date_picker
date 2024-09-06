const calculateRecurringDates = (startDate, endDate, pattern, customization) => {
  if (!startDate || !endDate) {
    return [];
  }

  const dates = [];
  let currentDate = new Date(startDate);
  const end = new Date(endDate);

  while (currentDate <= end) {
    dates.push(currentDate.toISOString().split('T')[0]);

    switch (pattern) {
      case 'Daily':
        currentDate.setDate(currentDate.getDate() + customization);
        break;
      case 'Weekly':
        currentDate.setDate(currentDate.getDate() + (7 * customization));
        break;
      case 'Monthly':
        currentDate.setMonth(currentDate.getMonth() + customization);
        break;
      case 'Yearly':
        currentDate.setFullYear(currentDate.getFullYear() + customization);
        break;
      default:
        currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  return dates;
};

export default calculateRecurringDates;