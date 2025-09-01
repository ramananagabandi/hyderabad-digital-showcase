import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Code, 
  Settings, 
  Database, 
  BarChart3, 
  Users,
  ArrowRight,
  Zap,
  Cpu,
  CheckCircle,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Consulting Services",
      description: "Cutting-edge expertise in a variety of sectors, actionable recommendations, local know-how and understanding to support you in successfully completing your digital transformation projects.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Code,
      title: "Application Services and Solutions",
      description: "Software development, business agility, agile development, and cloud modernization.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Settings,
      title: "Technologies & Platforms",
      description: "With our certified experts and centres of excellence, COFOMO Tech allows you to capitalize on world-class ecosystems to modernize your organization, and create scalable solutions.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Database,
      title: "Managed Services",
      description: "With our certified experts and centres of excellence, COFOMO Tech allows you to capitalize on world-class ecosystems to modernize your organization, and create scalable solutions.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Obtain the most value for your EDMA initiatives using proven approaches and industry best practices.",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Users,
      title: "Professional Services",
      description: "Our knowledge, capability, and speed of delivery have earned us a reputation for excellence in talent management. As a leading Indian provider, we offer a variety of service models to meet your needs.",
      image: "/api/placeholder/400/300"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent pt-24 pb-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            OUR SERVICES
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Solutions and services that ensure the success of your projects
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`flex items-center gap-8 ${!isLeft ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-gradient-to-br from-primary to-accent text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold">
                          LEARN MORE 
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-64 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              );
            })}
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
                Why Choose COFOMO Tech?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Expertise</h3>
                    <p className="text-muted-foreground">
                      25+ years of experience delivering successful projects across various industries
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
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how our expertise can accelerate your digital transformation
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors text-lg">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;