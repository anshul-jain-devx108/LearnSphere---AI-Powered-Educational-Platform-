
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  MessageSquare, 
  Mail, 
  Calendar, 
  Bot, 
  AlertCircle,
  Clock,
  FileText,
  Phone,
  Users,
  BarChart,
  FileCheck,
  BookOpen
} from "lucide-react";
import { useState } from "react";

const communicationTemplates = [
  {
    title: "Progress Update",
    description: "Weekly student progress report",
    icon: FileText,
  },
  {
    title: "Behavior Notice",
    description: "Updates on student behavior",
    icon: AlertCircle,
  },
  {
    title: "Meeting Request",
    description: "Schedule parent-teacher conference",
    icon: Calendar,
  },
  {
    title: "Assignment Alert",
    description: "Missing or upcoming assignments",
    icon: Clock,
  },
];

const recentCommunications = [
  {
    parentName: "Mrs. Johnson",
    studentName: "Alex Johnson",
    type: "Progress Update",
    date: "2024-03-15",
    status: "Sent",
  },
  {
    parentName: "Mr. Williams",
    studentName: "Sarah Williams",
    type: "Meeting Request",
    date: "2024-03-14",
    status: "Scheduled",
  },
];

const studentPerformance = [
  {
    name: "Alex Johnson",
    grade: "A-",
    attendance: "95%",
    recentAssignments: [
      { title: "Math Quiz", grade: "A", completed: true },
      { title: "Science Project", grade: "B+", completed: true },
      { title: "History Essay", grade: null, completed: false }
    ]
  },
  {
    name: "Sarah Williams",
    grade: "B+",
    attendance: "92%",
    recentAssignments: [
      { title: "Math Quiz", grade: "B", completed: true },
      { title: "Science Project", grade: "A-", completed: true },
      { title: "History Essay", grade: "B+", completed: true }
    ]
  }
];

const upcomingEvents = [
  {
    title: "Parent-Teacher Conference",
    date: "April 15, 2024",
    time: "3:00 PM - 4:00 PM",
    location: "Room 103"
  },
  {
    title: "Science Fair",
    date: "April 22, 2024",
    time: "1:00 PM - 3:00 PM",
    location: "School Gymnasium"
  },
  {
    title: "End of Term Assembly",
    date: "April 30, 2024",
    time: "10:00 AM - 11:30 AM",
    location: "Auditorium"
  }
];

export const ParentCommunicationTab = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const isMobile = useIsMobile();

  const handleGenerateMessage = () => {
    // TODO: Implement AI message generation
    console.log("Generating message with template:", selectedTemplate);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="messages" className="w-full">
        <TabsList className="w-full mb-6 grid grid-cols-4 h-auto">
          <TabsTrigger value="messages" className="py-2">
            <MessageSquare className="h-4 w-4 mr-2 hidden sm:inline" />
            Messages
          </TabsTrigger>
          <TabsTrigger value="performance" className="py-2">
            <BarChart className="h-4 w-4 mr-2 hidden sm:inline" />
            Performance
          </TabsTrigger>
          <TabsTrigger value="assignments" className="py-2">
            <FileCheck className="h-4 w-4 mr-2 hidden sm:inline" />
            Assignments
          </TabsTrigger>
          <TabsTrigger value="calendar" className="py-2">
            <Calendar className="h-4 w-4 mr-2 hidden sm:inline" />
            Calendar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-6">
          {/* AI Communication Tools */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communicationTemplates.map((template, index) => (
              <Card 
                key={index} 
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedTemplate(template.title)}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-3 rounded-full bg-primary/10">
                    <template.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">{template.title}</h3>
                  <p className="text-sm text-gray-600">{template.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Message Composer */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-4">Message Composer</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Student</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alex">Alex Johnson</SelectItem>
                      <SelectItem value="sarah">Sarah Williams</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Communication Type</label>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {communicationTemplates.map((template) => (
                        <SelectItem key={template.title} value={template.title}>
                          {template.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message Content</label>
                <Textarea 
                  value={messageContent}
                  onChange={(e) => setMessageContent(e.target.value)}
                  placeholder="Enter your message or let AI generate one..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  variant="outline" 
                  className="flex items-center justify-center gap-2"
                  onClick={handleGenerateMessage}
                >
                  <Bot className="h-4 w-4" />
                  <span className="whitespace-nowrap">Generate with AI</span>
                </Button>
                <Button className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Send Message</span>
                </Button>
              </div>
            </div>
          </Card>

          {/* Recent Communications */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Communications</h3>
            <div className="space-y-4">
              {recentCommunications.map((comm, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="mb-2 sm:mb-0">
                    <p className="font-medium">{comm.parentName}</p>
                    <p className="text-sm text-gray-500">
                      Re: {comm.studentName} - {comm.type}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-sm text-gray-500">{comm.date}</span>
                    <span className="text-sm font-medium text-green-500">{comm.status}</span>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {!isMobile && "Call"}
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {!isMobile && "Message"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studentPerformance.map((student, index) => (
              <Card key={index} className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4">{student.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-secondary/50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Overall Grade</p>
                    <p className="text-xl font-bold">{student.grade}</p>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-600">Attendance</p>
                    <p className="text-xl font-bold">{student.attendance}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recent Assignments</h4>
                  <div className="space-y-2">
                    {student.recentAssignments.map((assignment, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b pb-2">
                        <div className="flex items-center">
                          {assignment.completed ? (
                            <FileCheck className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <Clock className="h-4 w-4 text-amber-500 mr-2" />
                          )}
                          <span>{assignment.title}</span>
                        </div>
                        <span className="font-medium">
                          {assignment.grade || "Not submitted"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <Button size="sm" variant="outline" className="w-full sm:w-auto">
                    <BookOpen className="h-4 w-4 mr-2" />
                    View Full Report
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-4">Current Assignments</h3>
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-3 bg-muted p-3 font-medium text-sm">
                  <div>Assignment</div>
                  <div className="hidden sm:block">Due Date</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {studentPerformance[0].recentAssignments.map((assignment, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 p-3 text-sm hover:bg-gray-50">
                      <div className="font-medium">{assignment.title}</div>
                      <div className="hidden sm:block">April 15, 2024</div>
                      <div className="flex items-center">
                        {assignment.completed ? (
                          <span className="inline-flex items-center text-green-600">
                            <FileCheck className="h-4 w-4 mr-1" />
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-amber-600">
                            <Clock className="h-4 w-4 mr-1" />
                            Pending
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-6">
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-2 sm:mb-0">
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.date} • {event.time}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                    <Button size="sm" variant="outline" className="mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="font-medium">Parent Portal Tools</h3>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <Button variant="outline" className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Parent Directory</span>
            </Button>
            <Button className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Schedule Conference</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
