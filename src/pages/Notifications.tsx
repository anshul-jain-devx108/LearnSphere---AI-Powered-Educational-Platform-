
import { MainLayout } from "@/components/layout/MainLayout";
import { Bell, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    title: "New Assignment Submission",
    message: "John Doe has submitted the Computer Science project",
    time: "5 minutes ago",
    type: "assignment",
    read: false,
  },
  {
    id: 2,
    title: "Class Reminder",
    message: "Advanced Mathematics class starts in 30 minutes",
    time: "25 minutes ago",
    type: "reminder",
    read: false,
  },
  {
    id: 3,
    title: "Grade Updated",
    message: "You've graded Sarah's assignment in Data Structures",
    time: "2 hours ago",
    type: "grade",
    read: true,
  },
];

const Notifications = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600">Stay updated with your classes and students</p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Bell size={20} />
            Mark All as Read
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 transition-colors ${
                !notification.read ? "bg-primary/5" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 rounded-full ${
                    notification.type === "assignment"
                      ? "bg-primary/10 text-primary"
                      : notification.type === "reminder"
                      ? "bg-orange-100 text-orange-500"
                      : "bg-green-100 text-green-500"
                  }`}
                >
                  {notification.type === "assignment" ? (
                    <CheckCircle2 size={20} />
                  ) : notification.type === "reminder" ? (
                    <Clock size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">
                      {notification.title}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;
