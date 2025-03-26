
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Target, UserCircle } from "lucide-react";

const mockStudents = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex@example.com",
    attendance: 92,
    overallGrade: "A-",
    strengths: ["Critical Thinking", "Written Expression"],
    areasForImprovement: ["Group Participation"],
    recentProgress: "+15%",
    behavioralNotes: "Shows great initiative in class discussions",
    learningStyle: "Visual",
    accommodations: "None required",
    parentMeetings: 2,
    assignments: [
      { name: "Midterm Essay", grade: 88, feedback: "Excellent analysis" },
      { name: "Group Project", grade: 85, feedback: "Good teamwork" }
    ],
    analytics: {
      participationTrend: "Increasing",
      completionRate: 95,
      averageScore: 87,
      improvementAreas: ["Public Speaking", "Team Leadership"]
    }
  },
];

const studentAnalytics = [
  {
    title: "Academic Performance",
    metrics: [
      { label: "Overall Grade", value: "87%", trend: "up" },
      { label: "Assignment Completion", value: "95%", trend: "stable" },
      { label: "Class Participation", value: "82%", trend: "up" }
    ]
  },
  {
    title: "Learning Progress",
    metrics: [
      { label: "Concepts Mastered", value: "15/20", trend: "up" },
      { label: "Skills Developed", value: "8/10", trend: "up" },
      { label: "Project Quality", value: "90%", trend: "stable" }
    ]
  }
];

export const StudentProfilesTab = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="space-y-4">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Students</h3>
            <Input 
              placeholder="Search students..." 
              className="max-w-[200px]"
            />
          </div>
          <div className="space-y-2">
            {mockStudents.map((student) => (
              <div
                key={student.id}
                className="p-2 hover:bg-gray-50 rounded cursor-pointer"
                onClick={() => setSelectedStudent(student)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{student.overallGrade}</p>
                    <p className="text-sm text-green-500">{student.recentProgress}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="md:col-span-2 space-y-4">
        {selectedStudent ? (
          <>
            <Card className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedStudent.name}</h2>
                  <p className="text-gray-600">{selectedStudent.email}</p>
                </div>
                <Button>Generate Report</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Strengths</h3>
                  <div className="space-y-1">
                    {selectedStudent.strengths.map((strength, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Areas for Improvement</h3>
                  <div className="space-y-1">
                    {selectedStudent.areasForImprovement.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-orange-500" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studentAnalytics.map((section, index) => (
                <Card key={index} className="p-4">
                  <h3 className="font-semibold mb-4">{section.title}</h3>
                  <div className="space-y-4">
                    {section.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{metric.label}</span>
                          <span className="font-medium">{metric.value}</span>
                        </div>
                        <Progress value={parseInt(metric.value)} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <Card className="p-6 text-center">
            <UserCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium">Select a Student</h3>
            <p className="text-gray-500">Choose a student to view their detailed profile</p>
          </Card>
        )}
      </div>
    </div>
  );
};
