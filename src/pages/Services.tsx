import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code, Smartphone, Cloud, Database, Shield, Cog, 
  Globe, Monitor, Cpu, Zap, ArrowRight, CheckCircle 
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies",
      features: [
        "Full-stack web applications",
        "Enterprise software solutions",
        "API development & integration",
        "Legacy system modernization"
      ],
      technologies: ["React", "Node.js", "Python", "Java", ".NET"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "iOS & Android native apps",
        "React Native development",
        "Flutter applications",
        "Progressive Web Apps (PWA)"
      ],
      technologies: ["React Native", "Flutter", "iOS", "Android", "PWA"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code",
        "DevOps & CI/CD",
        "Cloud security & compliance"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      icon: Database,
      title: "Data Analytics & BI",
      description: "Advanced data analytics and business intelligence",
      features: [
        "Data warehouse design",
        "Real-time analytics",
        "Machine learning models",
        "Custom dashboards & reports"
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "SQL"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions for your business",
      features: [
        "Security audits & assessments",
        "Vulnerability management",
        "Identity & access management",
        "Compliance consulting"
      ],
      technologies: ["SIEM", "Firewall", "VPN", "SSL/TLS", "OAuth"]
    },
    {
      icon: Cog,
      title: "IT Consulting",
      description: "Strategic IT consulting and digital transformation",
      features: [
        "Digital transformation strategy",
        "Technology roadmap planning",
        "Process optimization",
        "Change management"
      ],
      technologies: ["ITIL", "Agile", "DevOps", "Lean", "Six Sigma"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive, and scalable web solutions",
      features: [
        "Responsive web design",
        "E-commerce platforms",
        "Content management systems",
        "Performance optimization"
      ],
      technologies: ["React", "Vue.js", "WordPress", "Shopify", "Magento"]
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "User-centered design for exceptional experiences",
      features: [
        "User research & analysis",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Usability testing"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We understand your business needs and requirements"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "We create a detailed project roadmap and timeline"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Our team builds your solution using best practices"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures a bug-free solution"
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "We deploy and provide ongoing maintenance support"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive IT Solutions
              <br />
              for Your Business
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From custom software development to cloud solutions, we offer a full 
              spectrum of IT services to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose TechSolutions?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Expertise</h3>
                    <p className="text-muted-foreground">
                      8+ years of experience delivering successful projects across various industries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Cutting-edge Technology</h3>
                    <p className="text-muted-foreground">
                      We use the latest technologies and frameworks to build future-ready solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Rigorous testing and quality control processes ensure bug-free deliverables
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Global Standards</h3>
                    <p className="text-muted-foreground">
                      We follow international best practices and industry standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-elegant">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-white/80 text-sm">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">40+</div>
                  <div className="text-white/80 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">98%</div>
                  <div className="text-white/80 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-white/80 text-sm">Support Available</div>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;