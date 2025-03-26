
import { MainLayout } from "@/components/layout/MainLayout";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      date: new Date(2024, 2, 20),
      title: "Assignment Due: Computer Science Project",
      type: "assignment",
    },
    {
      date: new Date(2024, 2, 22),
      title: "Class Meeting: Advanced Mathematics",
      type: "class",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            <p className="text-gray-600">Manage your schedule and deadlines</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-sm text-gray-500">
                      {event.date.toLocaleDateString()}
                    </p>
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <span className="text-xs text-primary uppercase">
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Calendar;
