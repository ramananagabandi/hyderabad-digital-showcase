import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Clock, Users, DollarSign, Heart, GraduationCap, 
  Coffee, Zap, ArrowRight, Briefcase, Code, Smartphone, Database 
} from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities and certification support"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options"
    },
    {
      icon: Users,
      title: "Great Team Culture",
      description: "Collaborative environment with team building activities"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Work on cutting-edge projects with latest technologies"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      description: "We're looking for an experienced full stack developer to join our core development team."
    },
    {
      title: "Mobile App Developer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      description: "Join our mobile team to build innovative apps for iOS and Android platforms."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      description: "Help us build and maintain scalable cloud infrastructure and deployment pipelines."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Hyderabad",
      type: "Full-time",
      experience: "2-4 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description: "Design beautiful and intuitive user experiences for our web and mobile applications."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Hyderabad",
      type: "Full-time",
      experience: "4-6 years",
      skills: ["Agile", "Scrum", "JIRA", "Stakeholder Management"],
      description: "Lead cross-functional teams to deliver projects on time and within budget."
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "Hyderabad",
      type: "Full-time",
      experience: "3-5 years",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      description: "Analyze complex data sets to drive business insights and build predictive models."
    }
  ];

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case "Engineering":
        return Code;
      case "Design":
        return Smartphone;
      case "Analytics":
        return Database;
      default:
        return Briefcase;
    }
  };

  const culture = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and experimentation with new technologies"
    },
    {
      title: "Collaborative Environment",
      description: "We believe in teamwork and knowledge sharing across all departments"
    },
    {
      title: "Growth Mindset",
      description: "We support personal and professional development of every team member"
    },
    {
      title: "Client Success",
      description: "We're committed to delivering exceptional value to our clients"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Career
              <br />
              with TechSolutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join a dynamic team of passionate professionals in Hyderabad's thriving 
              tech ecosystem. Grow your skills, work on exciting projects, and make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where talented individuals can thrive, 
              learn, and contribute to meaningful projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities and find the perfect role to advance your career.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => {
              const DepartmentIcon = getDepartmentIcon(position.department);
              return (
                <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                          <DepartmentIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{position.title}</CardTitle>
                          <Badge variant="secondary" className="mt-1">{position.department}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{position.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Required Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link to="/contact">
                        <Button className="w-full bg-gradient-primary shadow-elegant">
                          Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Culture & Values
              </h2>
              <p className="text-muted-foreground mb-8">
                At TechSolutions, we've built a culture that values innovation, collaboration, 
                and personal growth. We believe that when our team members thrive, our clients 
                and projects succeed too.
              </p>
              <div className="space-y-6">
                {culture.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary pl-6">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-elegant">
              <h3 className="text-2xl font-bold mb-6 text-center">Team Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-white/80 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-white/80 text-sm">Departments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-white/80 text-sm">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4.8</div>
                  <div className="text-white/80 text-sm">Glassdoor Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't see a perfect match? Send us your resume anyway. We're always looking 
            for talented individuals to join our growing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Send Your Resume <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;