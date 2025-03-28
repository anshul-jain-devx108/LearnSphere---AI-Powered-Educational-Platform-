import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  Sparkles, 
  Check, 
  X, 
  Upload, 
  Save,
  Loader2,
  Calendar
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel 
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import { useClassroom } from "@/hooks/useClassroom";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePickerWithText } from "@/components/ui/date-picker-with-text";
import { useIsMobile } from "@/hooks/use-mobile";

const assignmentFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subject: z.string().min(1, "Subject is required"),
  gradeLevel: z.string().min(1, "Grade level is required"),
  difficultyLevel: z.string().min(1, "Difficulty level is required"),
  detailedLevel: z.string().min(1, "Detail level is required"),
  duration: z.string().min(1, "Duration is required"),
  includeExamples: z.boolean().default(false),
  includePracticeQuestions: z.boolean().default(false),
  standardGrading: z.string().min(1, "Standard grading is required"),
  deadline: z.date().optional(),
  additionalInstructions: z.string().optional(),
});

type AssignmentFormValues = z.infer<typeof assignmentFormSchema>;

interface AIAssignmentGeneratorProps {
  onClose: () => void;
}

export const AIAssignmentGenerator = ({ onClose }: AIAssignmentGeneratorProps) => {
  const [generatedAssignment, setGeneratedAssignment] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isReviewing, setIsReviewing] = useState(false);
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const { classroom } = useClassroom(id || "");
  const isMobile = useIsMobile();

  const form = useForm<AssignmentFormValues>({
    resolver: zodResolver(assignmentFormSchema),
    defaultValues: {
      title: "",
      subject: classroom?.subject || "",
      gradeLevel: "",
      difficultyLevel: "medium",
      detailedLevel: "standard",
      duration: "30",
      includeExamples: false,
      includePracticeQuestions: false,
      standardGrading: "rubric",
      additionalInstructions: "",
    },
  });

  const onSubmit = (data: AssignmentFormValues) => {
    setIsGenerating(true);
    
    // Simulate API call to generate assignment with AI
    setTimeout(() => {
      const assignmentContent = generateMockAssignment(data);
      setGeneratedAssignment(assignmentContent);
      setIsGenerating(false);
      setIsReviewing(true);
      
      toast({
        title: "Assignment generated",
        description: "Review the assignment before saving or making changes.",
      });
    }, 2000);
  };

  const handleSaveAssignment = () => {
    toast({
      title: "Assignment saved",
      description: "Your assignment has been saved to the database.",
    });
    onClose();
  };

  const handleSaveToDrive = () => {
    toast({
      title: "Assignment saved to Drive",
      description: "Your assignment has been saved to Google Drive.",
    });
  };

  const handleEditAssignment = () => {
    setIsReviewing(false);
  };

  // Mock function to generate an assignment
  const generateMockAssignment = (data: AssignmentFormValues) => {
    const examplesSection = data.includeExamples 
      ? `## Examples
1. Example 1: [Detailed example problem with solution]
2. Example 2: [Another example with complete walkthrough]
3. Example 3: [Complex example with step-by-step solution]
` 
      : '';
    
    const practiceSection = data.includePracticeQuestions
      ? `## Practice Questions
1. [Practice question 1]
2. [Practice question 2]
3. [Practice question 3]
4. [Practice question 4]
5. [Practice question 5]
` 
      : '';
    
    const deadlineInfo = data.deadline 
      ? `**Deadline**: ${data.deadline.toLocaleDateString()} by ${data.deadline.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` 
      : '';
    
    const gradingSection = `## Grading Criteria (${data.standardGrading})
- Understanding of concepts: 40%
- Application of knowledge: 30%
- Clarity of explanations: 20%
- Presentation: 10%

This assignment will be graded according to the ${data.standardGrading} standard.`;

    return `# ${data.title}
    
## Overview
This is a ${data.difficultyLevel} difficulty ${data.subject} assignment for grade ${data.gradeLevel}, designed to be completed in ${data.duration} minutes.
${deadlineInfo}

## Learning Objectives
- Understand key concepts in ${data.subject}
- Apply critical thinking to solve problems
- Demonstrate comprehension through written responses

## Instructions
1. Read all questions carefully before beginning
2. Show all work for maximum credit
3. You have ${data.duration} minutes to complete this assignment

${examplesSection}

## Questions
1. Explain the main concepts of [key topic in ${data.subject}]
2. Compare and contrast [concept A] and [concept B]
3. Solve the following problem: [problem description]
4. Analyze the following scenario: [scenario description]
5. Create a diagram illustrating [process/concept]

${practiceSection}

${data.additionalInstructions ? `## Additional Instructions\n${data.additionalInstructions}` : ''}

${gradingSection}
`;
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Assignment Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 py-3 md:px-6 md:py-4">
        {!isReviewing ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assignment Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter assignment title" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          readOnly 
                          value={classroom?.subject || field.value} 
                          className="bg-gray-100" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription className="text-xs">
                        Auto-populated from classroom settings
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grade Level</FormLabel>
                      <FormControl>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade level" />
                          </SelectTrigger>
                          <SelectContent position="popper" className="bg-white z-50">
                            <SelectItem value="elementary">Elementary (K-5)</SelectItem>
                            <SelectItem value="middle">Middle School (6-8)</SelectItem>
                            <SelectItem value="high">High School (9-12)</SelectItem>
                            <SelectItem value="college">College</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                <FormField
                  control={form.control}
                  name="difficultyLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Difficulty Level</FormLabel>
                      <FormControl>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent position="popper" className="bg-white z-50">
                            <SelectItem value="easy">Easy</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="hard">Hard</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="detailedLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Detail Level</FormLabel>
                      <FormControl>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select detail level" />
                          </SelectTrigger>
                          <SelectContent position="popper" className="bg-white z-50">
                            <SelectItem value="basic">Basic</SelectItem>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="comprehensive">Comprehensive</SelectItem>
                            <SelectItem value="in-depth">In-depth</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration (minutes)</FormLabel>
                      <FormControl>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent position="popper" className="bg-white z-50">
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="45">45 minutes</SelectItem>
                            <SelectItem value="60">60 minutes</SelectItem>
                            <SelectItem value="90">90 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="standardGrading"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Grading Standard</FormLabel>
                      <FormControl>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select grading standard" />
                          </SelectTrigger>
                          <SelectContent position="popper" className="bg-white z-50">
                            <SelectItem value="rubric">Standard Rubric</SelectItem>
                            <SelectItem value="points">Points-Based</SelectItem>
                            <SelectItem value="competency">Competency-Based</SelectItem>
                            <SelectItem value="holistic">Holistic Assessment</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription className="text-xs">
                        This standard will be used for future AI grading
                      </FormDescription>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                <FormField
                  control={form.control}
                  name="includeExamples"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 md:p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Include Examples</FormLabel>
                        <FormDescription className="text-xs">
                          Add worked examples to help students understand
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="includePracticeQuestions"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3 md:p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Include Practice Questions</FormLabel>
                        <FormDescription className="text-xs">
                          Add practice questions for additional learning
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deadline</FormLabel>
                    <FormControl>
                      <div className={`${isMobile ? 'w-full' : 'w-auto max-w-md'}`}>
                        <DatePickerWithText
                          date={field.value}
                          setDate={field.onChange}
                        />
                      </div>
                    </FormControl>
                    <FormDescription className="text-xs">
                      Set the deadline for assignment submission
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="additionalInstructions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Instructions (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Any specific topics, formats, or other requirements?"
                        className="min-h-[80px] md:min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Provide any specific requirements or topics to focus on
                    </FormDescription>
                  </FormItem>
                )}
              />
              
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onClose}
                  className="mt-2 sm:mt-0"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isGenerating}
                  className="gap-2"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      Generate Assignment
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
              <h3 className="text-lg font-semibold">Review Generated Assignment</h3>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleEditAssignment}
                >
                  <X className="h-4 w-4 mr-1" />
                  Edit Parameters
                </Button>
              </div>
            </div>
            
            <div className="border rounded-md p-3 md:p-4 whitespace-pre-wrap bg-muted/20 overflow-auto max-h-[50vh] md:max-h-[60vh]">
              {generatedAssignment}
            </div>
            
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={onClose}
              >
                Cancel
              </Button>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Button 
                  variant="outline"
                  className="gap-2"
                  onClick={handleSaveToDrive}
                >
                  <Upload className="h-4 w-4" />
                  Save to Drive
                </Button>
                <Button 
                  className="gap-2"
                  onClick={handleSaveAssignment}
                >
                  <Save className="h-4 w-4" />
                  Save to Database
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
