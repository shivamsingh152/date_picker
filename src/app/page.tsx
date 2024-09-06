import DatePicker from './components/DatePicker';
import RecurrenceOptions from './components/RecurrenceOptions';
import RecurrenceCustomization from './components/RecurrenceCustomization';
import PreviewCalendar from './components/PreviewCalendar';

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DatePicker />
        <RecurrenceOptions />
        <RecurrenceCustomization />
      </div>
      <div className="mt-8">
        <PreviewCalendar />
      </div>
    </div>
  );
}
