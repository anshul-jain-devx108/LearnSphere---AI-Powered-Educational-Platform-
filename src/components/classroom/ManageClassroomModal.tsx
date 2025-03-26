
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useClassrooms } from "@/hooks/useClassrooms";
import { useClassroom } from "@/hooks/useClassroom";
import { ClassroomType } from "@/types/classroom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserPlus, Trash2, Save, Users, Book, Settings, GraduationCap } from "lucide-react";

interface ManageClassroomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  classroomId: string;
}

export function ManageClassroomModal({
  open,
  onOpenChange,
  classroomId,
}: ManageClassroomModalProps) {
  const { toast } = useToast();
  const { 
    updateClassroom, 
    isUpdating, 
    addStudent, 
    removeStudent,
    addTeacher,
    removeTeacher
  } = useClassrooms();
  
  const { 
    classroom, 
    isLoading, 
    students, 
    isLoadingStudents, 
    refetchStudents,
    teachers,
    isLoadingTeachers,
    refetchTeachers
  } = useClassroom(classroomId);
  
  const [activeTab, setActiveTab] = useState("details");
  
  const [classroomData, setClassroomData] = useState<Partial<ClassroomType>>({
    title: "",
    subject: "",
    room: "",
    description: "",
  });

  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
  });

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
    role: "",
  });

  // Update local state when classroom data is loaded
  useState(() => {
    if (classroom && !isLoading) {
      setClassroomData({
        title: classroom.title,
        subject: classroom.subject,
        room: classroom.room || "",
        description: classroom.description || "",
      });
    }
  });

  const handleSaveClassroom = () => {
    if (!classroomData.title || !classroomData.subject) {
      toast({
        title: "Missing information",
        description: "Please provide at least a title and subject for the classroom.",
        variant: "destructive",
      });
      return;
    }

    updateClassroom({
      id: classroomId,
      classroom: classroomData
    });
  };

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email) {
      toast({
        title: "Missing information",
        description: "Please provide both name and email for the student.",
        variant: "destructive",
      });
      return;
    }

    addStudent({
      classroomId,
      studentData: newStudent
    });

    // Reset form
    setNewStudent({
      name: "",
      email: "",
    });

    // Refetch students after adding
    setTimeout(() => {
      refetchStudents();
    }, 1000);
  };

  const handleRemoveStudent = (studentId: string) => {
    if (confirm("Are you sure you want to remove this student?")) {
      removeStudent({
        classroomId,
        studentId
      });

      // Refetch students after removing
      setTimeout(() => {
        refetchStudents();
      }, 1000);
    }
  };

  const handleAddTeacher = () => {
    if (!newTeacher.name || !newTeacher.email) {
      toast({
        title: "Missing information",
        description: "Please provide at least name and email for the teacher.",
        variant: "destructive",
      });
      return;
    }

    addTeacher({
      classroomId,
      teacherData: newTeacher
    });

    // Reset form
    setNewTeacher({
      name: "",
      email: "",
      subject: "",
      role: "",
    });

    // Refetch teachers after adding
    setTimeout(() => {
      refetchTeachers();
    }, 1000);
  };

  const handleRemoveTeacher = (teacherId: string) => {
    if (confirm("Are you sure you want to remove this teacher?")) {
      removeTeacher({
        classroomId,
        teacherId
      });

      // Refetch teachers after removing
      setTimeout(() => {
        refetchTeachers();
      }, 1000);
    }
  };

  if (isLoading) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[600px]">
          <div className="flex items-center justify-center p-6">
            <p>Loading classroom data...</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Manage Classroom</DialogTitle>
          <DialogDescription>
            Update classroom details, manage students, teachers, and configure settings.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="details" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Details
            </TabsTrigger>
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Students
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Teachers
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Class Title</Label>
                <Input
                  id="title"
                  value={classroomData.title}
                  onChange={(e) =>
                    setClassroomData({ ...classroomData, title: e.target.value })
                  }
                  placeholder="e.g., Advanced Mathematics"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={classroomData.subject}
                  onChange={(e) =>
                    setClassroomData({ ...classroomData, subject: e.target.value })
                  }
                  placeholder="e.g., Mathematics"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="room">Room Number</Label>
                <Input
                  id="room"
                  value={classroomData.room}
                  onChange={(e) =>
                    setClassroomData({ ...classroomData, room: e.target.value })
                  }
                  placeholder="e.g., Room 101"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={classroomData.description}
                  onChange={(e) =>
                    setClassroomData({ ...classroomData, description: e.target.value })
                  }
                  placeholder="Brief description of the class"
                />
              </div>

              <Button onClick={handleSaveClassroom} disabled={isUpdating} className="w-full mt-2">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="studentName">Student Name</Label>
                  <Input
                    id="studentName"
                    value={newStudent.name}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <Label htmlFor="studentEmail">Student Email</Label>
                  <Input
                    id="studentEmail"
                    type="email"
                    value={newStudent.email}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, email: e.target.value })
                    }
                    placeholder="Email address"
                  />
                </div>
              </div>
              <Button onClick={handleAddStudent} className="w-full">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </div>

            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoadingStudents ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">Loading students...</TableCell>
                    </TableRow>
                  ) : students.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">No students enrolled</TableCell>
                    </TableRow>
                  ) : (
                    students.map((student: any) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.grade || "N/A"}</TableCell>
                        <TableCell>{student.attendance || "N/A"}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveStudent(student.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="teachers" className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="teacherName">Teacher Name</Label>
                  <Input
                    id="teacherName"
                    value={newTeacher.name}
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, name: e.target.value })
                    }
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <Label htmlFor="teacherEmail">Teacher Email</Label>
                  <Input
                    id="teacherEmail"
                    type="email"
                    value={newTeacher.email}
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, email: e.target.value })
                    }
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="teacherSubject">Subject Specialization</Label>
                  <Input
                    id="teacherSubject"
                    value={newTeacher.subject}
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, subject: e.target.value })
                    }
                    placeholder="e.g., Mathematics"
                  />
                </div>
                <div>
                  <Label htmlFor="teacherRole">Role</Label>
                  <Input
                    id="teacherRole"
                    value={newTeacher.role}
                    onChange={(e) =>
                      setNewTeacher({ ...newTeacher, role: e.target.value })
                    }
                    placeholder="e.g., Assistant Teacher"
                  />
                </div>
              </div>
              <Button onClick={handleAddTeacher} className="w-full">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Teacher
              </Button>
            </div>

            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoadingTeachers ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">Loading teachers...</TableCell>
                    </TableRow>
                  ) : teachers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">No other teachers assigned</TableCell>
                    </TableRow>
                  ) : (
                    teachers.map((teacher: any) => (
                      <TableRow key={teacher.id}>
                        <TableCell>{teacher.name}</TableCell>
                        <TableCell>{teacher.email}</TableCell>
                        <TableCell>{teacher.subject || "N/A"}</TableCell>
                        <TableCell>{teacher.role || "N/A"}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveTeacher(teacher.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Classroom Settings</h3>
              <p className="text-sm text-gray-500">Configure additional settings for your classroom.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border p-4 rounded-md">
                <div>
                  <h4 className="font-medium">Allow Student Discussions</h4>
                  <p className="text-sm text-gray-500">Enable or disable student discussion threads</p>
                </div>
                <div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between border p-4 rounded-md">
                <div>
                  <h4 className="font-medium">Send Assignment Notifications</h4>
                  <p className="text-sm text-gray-500">Automatically notify students about new assignments</p>
                </div>
                <div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between border p-4 rounded-md">
                <div>
                  <h4 className="font-medium">Parent Portal Access</h4>
                  <p className="text-sm text-gray-500">Allow parents to access classroom reports and updates</p>
                </div>
                <div>
                  <Button variant="outline">Enable</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
