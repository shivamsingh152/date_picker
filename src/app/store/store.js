import { create } from 'zustand';
import calculateRecurringDates from '../utils/calculateRecurringDates';

const useDateStore = create((set) => ({
  startDate: '',
  endDate: '',
  recurringDates: [],
  recurringPattern: 'Daily',
  recurringCustomization: 1,

  setStartDate: (date) => set((state) => {
    const newRecurringDates = calculateRecurringDates(date, state.endDate, state.recurringPattern, state.recurringCustomization);
    return { startDate: date, recurringDates: newRecurringDates };
  }),

  setEndDate: (date) => set((state) => {
    const newRecurringDates = calculateRecurringDates(state.startDate, date, state.recurringPattern, state.recurringCustomization);
    return { endDate: date, recurringDates: newRecurringDates };
  }),

  setRecurringPattern: (pattern) => set((state) => {
    const newRecurringDates = calculateRecurringDates(state.startDate, state.endDate, pattern, state.recurringCustomization);
    return { recurringPattern: pattern, recurringDates: newRecurringDates };
  }),

  setRecurringCustomization: (customization) => set((state) => {
    const newRecurringDates = calculateRecurringDates(state.startDate, state.endDate, state.recurringPattern, customization);
    return { recurringCustomization: customization, recurringDates: newRecurringDates };
  }),

  calculateDates: () => set((state) => {
    const newRecurringDates = calculateRecurringDates(state.startDate, state.endDate, state.recurringPattern, state.recurringCustomization);
    return { recurringDates: newRecurringDates };
  })
}));

export default useDateStore;