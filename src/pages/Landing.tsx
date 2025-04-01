
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Moon, Sun, ArrowRight, BookOpen, GraduationCap, 
  Users, Award, CheckCircle, Star, Sparkles, 
  BarChart3, Calculator, Clock, ShieldCheck,Globe
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Landing = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // const features = [
  //   {
  //     icon: GraduationCap,
  //     title: "Smart Learning",
  //     description: "Personalized learning paths adapted to each student's needs"
  //   },
  //   {
  //     icon: Users,
  //     title: "Collaborative Tools", 
  //     description: "Work together with classmates and teachers seamlessly"
  //   },
  //   {
  //     icon: Award,
  //     title: "Track Progress",
  //     description: "Monitor academic growth with detailed analytics"
  //   }
  // ];
  const features = [
  
  {
    icon: Users,
    title: "Collaborative Tools", 
    description: "Facilitate seamless collaboration between students, teachers, and parents, fostering a connected and supportive learning community."
  },
  {
    icon: Award,
    title: "Track Progress",
    description: "Empower teachers and students with analytics to monitor academic growth, identify learning gaps, and enable targeted interventions."
  },
  {
    icon: Globe,
    title: "Regional Language Support",
    description: "Deliver teaching materials in multiple languages to embrace India's diverse linguistic and cultural contexts."
  }
];


  const testimonials = [
    {
      name: "Anshul Jaim",
      role: "Co-Founder",
      image: "https://avatars.githubusercontent.com/u/181500731?v=4",
      quote: "LearnSphere has transformed how teacher manages his classrooms. The AI assistant helps them grade papers in half the time!"
    },
    {
      name: "Bhanu Shakya",
      role: "Co-Founder",
      image: "https://avatars.githubusercontent.com/u/166703471?v=4",
      quote: "The collaborative tool make classwork so much easier to coordinate as per our survey"
    },
    {
      name: "Poornima University",
      role: "Ranked 47th amongst Top Universities in India",
      image: "https://poornima.edu.in/assets/images/PULogo.png",
      quote: "Very Helpful tool, Made academic work easier."
    }
  ];

  // const statistics = [
  //   { value: "87%", label: "Increase in student engagement", icon: BarChart3 },
  //   { value: "40%", label: "Personalised feedback for teacher and student", icon: Clock },
  //   { value: "10+", label: "Regional support", icon: Star }
  // ];
  const statistics = [
  { value: "87%", label: "Boost in student engagement, fostering active learning", icon: BarChart3 },
  { value: "40%", label: "Enhanced personalized feedback, empowering teachers and students alike", icon: Clock },
  { value: "10+", label: "Extensive regional language support for inclusive education", icon: Star }
];


  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "per month",
      description: "Perfect for individual teachers",
      features: [
        "AI-powered grading assistant",
        "Basic analytics",
        "10 classes",
        "Email support"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$29.99",
      period: "per month",
      description: "Ideal for departments",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "Unlimited classes",
        "Priority support",
        "Parent communication tools"
      ],
      cta: "Get Started",
      highlight: true
    },
    {
      name: "School",
      price: "$99.99",
      period: "per month",
      description: "Complete solution for schools",
      features: [
        "Everything in Pro",
        "Admin dashboard",
        "School-wide analytics",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">LearnSphere</span>
            </div>
            <div className="flex items-center gap-4">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="mr-4"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
              <Link to="/auth/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link to="/auth/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
 

              {/* Hero Section */}
<section className="pt-24 lg:pt-32 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-fade-in">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Transform Your Classroom Experience
        </h1>
        <p className="text-lg text-muted-foreground">
          Streamline your classroom management, enhance student engagement, and save valuable time with our comprehensive education platform.
        </p>
        <div className="flex gap-4">
          <Link to="/auth/register">
            <Button size="lg" className="gap-2">
              Login as Teacher
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" asChild>
            <a href="https://learn-sphere-student.vercel.app/" target="_blank" rel="noopener noreferrer">
              Are you a student? 🧑‍🎓
            </a>
          </Button>
        </div>
      </div>
      <div className="animate-fade-in relative hidden lg:block">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="relative bg-gradient-to-br from-background to-background/80 shadow-xl border rounded-xl overflow-hidden">
          <img 
            src="https://the-decoder.com/wp-content/uploads/2022/10/school_class_pupil_robot_DAKK_E_2.png" 
            alt="Teachers using digital tools in a classroom"
            className="w-full h-full object-cover rounded-xl opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
        </div>
      </div> {/* ✅ Removed unnecessary "{" here */}
    </div>
  </div>
</section>


      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Preview Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Powered by AI</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet Your AI Teaching Assistant</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get instant help with lesson planning, grading, and creating engaging materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card border rounded-xl shadow-lg p-6 order-2 lg:order-1">
              <Tabs defaultValue="lesson" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="lesson">Lesson Plans</TabsTrigger>
                  <TabsTrigger value="grade">Grade Papers</TabsTrigger>
                  <TabsTrigger value="explain">Explain Concepts</TabsTrigger>
                </TabsList>
                <TabsContent value="lesson" className="space-y-4 mt-4">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="font-medium text-sm">Prompt</p>
                    <p className="text-muted-foreground">Create a 45-minute lesson plan on photosynthesis for 7th graders</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <p className="text-sm text-muted-foreground mb-2">AI Assistant</p>
                    <p>Here's your complete photosynthesis lesson plan with interactive activities, visual aids, and assessment methods...</p>
                  </div>
                </TabsContent>
                <TabsContent value="grade" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="font-medium text-sm">Prompt</p>
                      <p className="text-muted-foreground">Help me provide feedback on this student essay about climate change</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <p className="text-sm text-muted-foreground mb-2">AI Assistant</p>
                      <p>The essay has strong points regarding the causes of climate change but could use more evidence...</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="explain" className="mt-4">
                  <div className="space-y-4">
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="font-medium text-sm">Prompt</p>
                      <p className="text-muted-foreground">Explain the water cycle in simple terms for 3rd graders</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4 py-2">
                      <p className="text-sm text-muted-foreground mb-2">AI Assistant</p>
                      <p>Water is like a traveler that goes on an amazing journey! It starts in oceans, lakes, and rivers. Then the sun heats it up and turns it into an invisible gas called water vapor...</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl font-semibold">AI that understands education</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Create lesson materials in seconds</p>
                    <p className="text-muted-foreground">Generate plans, worksheets, and quizzes tailored to your curriculum</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Grade papers and provide feedback</p>
                    <p className="text-muted-foreground">Save hours on grading while offering personalized student feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Differentiate instruction</p>
                    <p className="text-muted-foreground">Modify content for different learning levels and styles in one click</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose LearnSphere?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to manage your classroom effectively
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Educators Are Saying</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hunderds of teachers are already using LearnSphere to transform their classrooms
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 bg-transparent">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <blockquote className="text-xl italic">"{testimonial.quote}"</blockquote>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static transform-none mx-0" />
              <CarouselNext className="static transform-none mx-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
{/*       <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-xl border ${plan.highlight ? 'ring-2 ring-primary shadow-lg' : ''} 
                  bg-card p-8 relative flex flex-col`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                    <div className="inline-block bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-extrabold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="mt-6 space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <Button 
                    className="w-full" 
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 */}
      {/* Trust Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Schools Nationwide</h2>
            <p className="text-muted-foreground text-lg">Join thousands of educational institutions already using LearnSphere</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 w-full bg-muted/60 rounded-lg flex items-center justify-center">
                <div className="text-xl font-bold text-muted-foreground/40">School Logo</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
{/*       <section className="py-24 lg:py-32 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Classroom?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of educators who are saving time, increasing engagement, and improving outcomes with LearnSphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/register">
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required. Cancel anytime.</p>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Testimonials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Tutorials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">GDPR</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="ml-2 font-bold">LearnSphere</span>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-muted-foreground">
              © {new Date().getFullYear()} LearnSphere. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
