import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Trophy, Clock, Shield, Code, Smartphone, Cloud, CheckCircle, Star, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import cofomoTechLogo from "@/assets/cofomo-tech-logo.png";

const Index = () => {
  const stats = [
    { number: "50+", label: "Tech Experts" },
    { number: "15+", label: "Solution Architects" },
    { number: "100+", label: "Clients Worldwide" },
    { number: "8+", label: "Years of Excellence" }
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built with cutting-edge technologies to drive your business forward.",
      link: "/services/application-services"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
      link: "/services/application-services"
    },
    {
      icon: <Cloud className="w-12 h-12 text-primary" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
      link: "/services/consulting-services"
    }
  ];

  const whyChoose = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Expert Team",
      description: "Certified professionals with deep industry expertise and proven track records."
    },
    {
      icon: <Trophy className="w-8 h-8 text-accent" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive real business value."
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: "Fast Delivery",
      description: "Agile methodologies ensure quick turnaround times without compromising quality."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security and compliance built into every solution we deliver."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src={cofomoTechLogo} 
                alt="COFOMO Tech Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              EMPOWERING DIGITAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                INNOVATION
              </span>
              <br />
              AND BUSINESS PERFORMANCE
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              COFOMO Tech delivers cutting-edge technology solutions that transform businesses. 
              From strategic consulting to professional services, we are your trusted partner 
              in digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-primary hover:text-accent transition-colors font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose COFOMO Tech
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the difference that expertise, innovation, and commitment make 
              in driving your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who have accelerated their growth with COFOMO Tech's 
            innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;