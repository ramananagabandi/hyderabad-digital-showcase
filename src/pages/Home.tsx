import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Zap, Shield, Code, Database, Cloud, Smartphone, Globe, Cpu, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Exact Cofomo Design */}
      <section className="relative py-32 bg-gradient-hero text-white overflow-hidden min-h-[600px] flex items-center">
        {/* Abstract flowing background */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"rgba(59, 130, 246, 0.3)", stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:"rgba(99, 102, 241, 0.2)", stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"rgba(139, 92, 246, 0.1)", stopOpacity:1}} />
              </linearGradient>
            </defs>
            <path d="M0,300 C200,200 400,400 600,300 C800,200 1000,400 1200,300 L1200,600 L0,600 Z" fill="url(#grad1)" opacity="0.6"/>
            <path d="M0,350 C250,250 450,450 700,350 C950,250 1100,450 1200,350 L1200,600 L0,600 Z" fill="url(#grad1)" opacity="0.4"/>
            <path d="M0,400 C300,300 500,500 800,400 C1000,300 1100,500 1200,400 L1200,600 L0,600 Z" fill="url(#grad1)" opacity="0.3"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                EMPOWERING DIGITAL INNOVATION
                <br />
                AND BUSINESS PERFORMANCE
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                Cofomo is a Canadian company dedicated to innovation and 
                technological advancement. From strategic consulting, 
                project delivery to professional services, we are here for you 
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Exact Cofomo Orange Banner */}
      <section className="py-16 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">3,000+</div>
              <div className="text-lg font-medium">Experts</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">400+</div>
              <div className="text-lg font-medium">Architects</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">300+</div>
              <div className="text-lg font-medium">Institutional clients</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">30</div>
              <div className="text-lg font-medium">Years in business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solutions and services that ensure the success of your digital transformation projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Custom web applications built with modern technologies and best practices for optimal performance.
                </p>
                <Link to="/services" className="text-primary hover:text-accent transition-colors inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Mobile Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Native and cross-platform mobile solutions that deliver exceptional user experiences.
                </p>
                <Link to="/services" className="text-primary hover:text-accent transition-colors inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Cloud Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Scalable cloud infrastructure and migration services for modern business needs.
                </p>
                <Link to="/services" className="text-primary hover:text-accent transition-colors inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Driving Innovation Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that transform your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Skilled professionals with years of industry experience
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Result Focused</h3>
              <p className="text-muted-foreground">
                Delivering measurable outcomes that drive business growth
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Agile methodologies ensuring timely project completion
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Solutions</h3>
              <p className="text-muted-foreground">
                Industry-standard security practices and compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-accent shadow-glow">
              <Link to="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;