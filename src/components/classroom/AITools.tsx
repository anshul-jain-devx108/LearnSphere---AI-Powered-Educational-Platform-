
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  BookOpen, 
  Lightbulb, 
  GraduationCap, 
  CheckCircle2, 
  Target,
  LineChart,
  BookCheck,
  Wand2,
  Brain
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AITool {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  prompt: string;
  category: string;
}

interface AIToolsProps {
  onSelectTool: (prompt: string) => void;
}

export const AITools = ({ onSelectTool }: AIToolsProps) => {
  const { toast } = useToast();
  
  const toolCategories = [
    { id: 'lesson', label: 'Lesson Planning', icon: FileText },
    { id: 'assessment', label: 'Assessment', icon: CheckCircle2 },
    { id: 'feedback', label: 'Student Feedback', icon: GraduationCap },
    { id: 'content', label: 'Content Creation', icon: BookOpen }
  ];

  const aiTools: AITool[] = [
    {
      id: 'lesson-plan',
      title: 'Lesson Plan Generator',
      description: 'Create detailed lesson plans',
      icon: FileText,
      category: 'lesson',
      prompt: "Generate a detailed lesson plan for my class about [topic]. Include learning objectives, key activities, assessment strategies, and materials needed."
    },
    {
      id: 'assessment-creator',
      title: 'Assessment Creator',
      description: 'Generate quizzes and tests',
      icon: BookOpen,
      category: 'assessment',
      prompt: "Create 10 assessment questions about [topic], with a mix of multiple choice and open-ended questions. Include an answer key."
    },
    {
      id: 'concept-explainer',
      title: 'Concept Explainer',
      description: 'Simplify complex topics',
      icon: Lightbulb,
      category: 'content',
      prompt: "Explain the concept of [concept] in simple terms that my students will understand. Include analogies and examples."
    },
    {
      id: 'feedback-generator',
      title: 'Feedback Generator',
      description: 'Create personalized feedback',
      icon: GraduationCap,
      category: 'feedback',
      prompt: "Help me provide constructive feedback on a student's work on [assignment/topic]. The main areas to address are: [areas]."
    },
    {
      id: 'rubric-builder',
      title: 'Rubric Builder',
      description: 'Create detailed grading rubrics',
      icon: CheckCircle2,
      category: 'assessment',
      prompt: "Create a detailed rubric for assessing a [assignment type] about [topic]. Include 4-5 criteria with descriptions for each performance level."
    },
    {
      id: 'differentiation-assistant',
      title: 'Differentiation Assistant',
      description: 'Adapt lessons for diverse needs',
      icon: Target,
      category: 'lesson',
      prompt: "Help me differentiate my lesson on [topic] for students with varying abilities. Include modifications for advanced students and those who need additional support."
    },
    {
      id: 'progress-reporter',
      title: 'Progress Report Writer',
      description: 'Generate progress reports',
      icon: LineChart,
      category: 'feedback',
      prompt: "Help me write a progress report for a student who [brief description of performance]. Include strengths, areas for improvement, and next steps."
    },
    {
      id: 'content-creator',
      title: 'Educational Content Creator',
      description: 'Generate handouts and worksheets',
      icon: BookCheck,
      category: 'content',
      prompt: "Create a worksheet about [topic] for my [grade level] students. Include a variety of question types and an engaging activity."
    }
  ];

  const handleSelectTool = (tool: AITool) => {
    onSelectTool(tool.prompt);
    
    toast({
      title: `${tool.title} selected`,
      description: "Edit the template and press Send to continue",
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <CardHeader className="p-0 pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Wand2 className="h-4 w-4 text-primary" />
            AI Teaching Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {toolCategories.map(category => (
              <Card 
                key={category.id} 
                className="p-3 flex items-center gap-3 cursor-pointer hover:bg-primary/5 transition-colors"
                onClick={() => {
                  const firstToolInCategory = aiTools.find(tool => tool.category === category.id);
                  if (firstToolInCategory) {
                    handleSelectTool(firstToolInCategory);
                  }
                }}
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <category.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{category.label}</h4>
                  <p className="text-xs text-muted-foreground">
                    {aiTools.filter(tool => tool.category === category.id).length} tools
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium mb-2">Quick Access Tools</h4>
            {aiTools.slice(0, 4).map(tool => (
              <Button 
                key={tool.id}
                variant="outline" 
                className="justify-start h-auto py-3 w-full" 
                onClick={() => handleSelectTool(tool)}
              >
                <tool.icon className="h-4 w-4 mr-2" />
                {tool.title}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="p-4">
        <CardHeader className="p-0 pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Brain className="h-4 w-4 text-primary" />
            Teaching Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 space-y-3">
          <div className="p-3 bg-primary/5 rounded-lg flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <LineChart className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Student Analytics</h4>
              <p className="text-xs text-muted-foreground">Get insights on student performance</p>
            </div>
          </div>
          
          <div className="p-3 bg-primary/5 rounded-lg flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <Target className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Learning Gaps</h4>
              <p className="text-xs text-muted-foreground">Identify areas needing attention</p>
            </div>
          </div>
          
          <div className="p-3 bg-primary/5 rounded-lg flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <BookCheck className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Progress Tracking</h4>
              <p className="text-xs text-muted-foreground">Monitor student growth over time</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
