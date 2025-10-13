import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Trophy, Clock, Shield, Code, Smartphone, Cloud, CheckCircle, Star, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import cofomoTechLogo from "@/assets/cofomo-tech-logo.png";
const Index = () => {
  const stats = [{
    number: "50+",
    label: "Tech Experts"
  }, {
    number: "15+",
    label: "Solution Architects"
  }, {
    number: "100+",
    label: "Clients Worldwide"
  }, {
    number: "8+",
    label: "Years of Excellence"
  }];
  const services = [{
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Custom Software Development",
    description: "Tailored software solutions built with cutting-edge technologies to drive your business forward.",
    link: "/services/application-services"
  }, {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
    link: "/services/application-services"
  }, {
    icon: <Cloud className="w-12 h-12 text-primary" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
    link: "/services/consulting-services"
  }];
  const whyChoose = [{
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Expert Team",
    description: "Certified professionals with deep industry expertise and proven track records."
  }, {
    icon: <Trophy className="w-8 h-8 text-accent" />,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive real business value."
  }, {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: "Fast Delivery",
    description: "Agile methodologies ensure quick turnaround times without compromising quality."
  }, {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "Secure Solutions",
    description: "Enterprise-grade security and compliance built into every solution we deliver."
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 lg:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Transforming Business Through Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
              Empowering Digital
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
                Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up font-light">
              Delivering cutting-edge technology solutions that drive business performance 
              and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/95 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-elegant px-8 py-6 text-lg">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white hover:text-primary shadow-glow transition-all duration-300 hover:scale-105 px-8 py-6 text-lg backdrop-blur-sm">
                  Explore Services
                  <Globe className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 transition-all duration-300 group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-semibold text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              WHAT WE DO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="group relative overflow-hidden bg-gradient-card border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-hover hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <CardContent className="relative p-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-glow">
                    <div className="transition-colors duration-500 [&>svg]:group-hover:text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to={service.link} className="inline-flex items-center text-primary hover:text-primary/80 transition-all duration-300 font-semibold group-hover:gap-3 gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The COFOMO Advantage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience the difference that expertise, innovation, and commitment make 
              in driving your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => <div key={index} className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-hover hover:-translate-y-1">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <div className="[&>svg]:text-white [&>svg]:w-10 [&>svg]:h-10">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <Star className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Trusted by 100+ Companies Worldwide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform
            <br />
            Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Join hundreds of satisfied clients who have accelerated their growth with COFOMO Tech's 
            innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 shadow-glow hover:shadow-elegant transition-all duration-300 hover:scale-105 px-10 py-7 text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white/40 text-white hover:bg-white hover:text-primary shadow-glow transition-all duration-300 hover:scale-105 px-10 py-7 text-lg font-semibold backdrop-blur-sm">
                View All Services
                <Globe className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;