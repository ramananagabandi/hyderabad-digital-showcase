import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Cloud, 
  Database, 
  Smartphone, 
  Globe, 
  Shield, 
  Cpu, 
  Layers,
  GitBranch,
  Server,
  Palette,
  Zap
} from "lucide-react";

const Technologies = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern web applications with cutting-edge frameworks",
      technologies: ["React", "Angular", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Robust server-side solutions and APIs",
      technologies: ["Node.js", "Python", "Java", "C#", ".NET", "Express.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database Technologies",
      description: "Scalable data storage and management solutions",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Cloud-native architecture and deployment",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform and native mobile applications",
      technologies: ["React Native", "Flutter", "iOS", "Android", "Ionic", "Xamarin"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Shield,
      title: "Security & DevOps",
      description: "Secure development and deployment practices",
      technologies: ["OAuth", "JWT", "SSL/TLS", "CI/CD", "Jenkins", "GitLab"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Layers,
      title: "Enterprise Solutions",
      description: "Large-scale enterprise application development",
      technologies: ["Microservices", "API Gateway", "Load Balancing", "Message Queues", "ERP", "CRM"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by AI/ML",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP", "Data Analytics"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Fundamentals",
    "Google Cloud Professional",
    "Oracle Certified Professional",
    "Salesforce Certified Developer",
    "IBM Cloud Certified"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent pt-24 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Technologies & Platforms
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            With our certified experts and centres of excellence, COFOMO Tech allows you to capitalize on world-class ecosystems to modernize your organization
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <Badge key={cert} variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build scalable, secure, and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-white transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Centres of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized teams focused on delivering expertise in key technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Cloud Architecture", focus: "AWS, Azure, GCP" },
              { name: "Data & Analytics", focus: "Big Data, ML, AI" },
              { name: "Mobile Solutions", focus: "iOS, Android, Hybrid" },
              { name: "Web Development", focus: "React, Angular, Vue" },
              { name: "DevOps & Security", focus: "CI/CD, Infrastructure" },
              { name: "Enterprise Integration", focus: "APIs, Microservices" },
              { name: "Digital Experience", focus: "UX/UI, Performance" },
              { name: "Innovation Labs", focus: "Emerging Technologies" }
            ].map((center, index) => (
              <Card key={center.name} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {center.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {center.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Certified Professionals" },
              { number: "100+", label: "Technology Partnerships" },
              { number: "25+", label: "Years of Experience" },
              { number: "1000+", label: "Projects Delivered" }
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Leverage Modern Technologies?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our certified experts help you choose the right technology stack for your project
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg">
            Discuss Your Technology Needs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Technologies;