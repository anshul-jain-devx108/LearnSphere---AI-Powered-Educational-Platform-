
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRightCircle } from "lucide-react";

interface Meeting {
  title: string;
  date: string;
  attendees: string;
}

interface MeetingsSectionProps {
  meetings: Meeting[];
}

export const MeetingsSection = ({ meetings }: MeetingsSectionProps) => {
  return (
    <Card className="p-6 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold dark:text-white">Upcoming Meetings</h2>
        </div>
        <Button variant="outline" size="sm">Schedule New</Button>
      </div>
      <div className="space-y-4">
        {meetings.map((meeting, index) => (
          <div key={index} className="flex items-start justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div>
              <h3 className="font-medium dark:text-white">{meeting.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{meeting.date}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{meeting.attendees}</p>
            </div>
            <Button size="sm" variant="ghost">
              <ArrowRightCircle className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
