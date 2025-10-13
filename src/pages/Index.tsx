import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Rocket, Target, TrendingUp, ChevronRight, Lightbulb, Zap, Shield, Users2, BarChart3, Database, Layout, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const metrics = [
    { number: "500+", label: "Projects Delivered", icon: <Target className="w-5 h-5" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Sparkles className="w-5 h-5" /> },
    { number: "150+", label: "Global Partners", icon: <Users2 className="w-5 h-5" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-5 h-5" /> }
  ];

  const solutions = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with our advanced analytics and AI-powered solutions.",
      benefits: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Digital Products",
      description: "Build exceptional web and mobile experiences that users love and businesses rely on.",
      benefits: ["Custom Development", "UI/UX Design", "Cloud Integration"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Workflow className="w-10 h-10" />,
      title: "Process Automation",
      description: "Streamline operations and boost efficiency with intelligent automation workflows.",
      benefits: ["Workflow Design", "Integration Services", "Cost Reduction"],
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const features = [
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation First", description: "Cutting-edge solutions using the latest technologies" },
    { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", description: "Rapid deployment without compromising quality" },
    { icon: <Shield className="w-6 h-6" />, title: "Enterprise Security", description: "Bank-level security for your peace of mind" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Data-Driven", description: "Every decision backed by solid analytics" }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Animated background mesh */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.15),transparent_60%)]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white tracking-wide">Next-Generation Technology Solutions</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight animate-slide-up">
            Build The
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
              Future Now
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-light">
            We craft powerful digital solutions that transform businesses and create lasting impact. 
            Partner with us to turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-110 px-10 py-8 text-lg font-bold rounded-full group">
                Get Started
                <Rocket className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-primary shadow-glow backdrop-blur-md transition-all duration-500 hover:scale-110 px-10 py-8 text-lg font-bold rounded-full">
                Explore Solutions
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-white">{metric.icon}</div>
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-500">
                  {metric.number}
                </div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.1),transparent_60%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              <Target className="w-4 h-4" />
              SOLUTIONS
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
              What We Create
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to solve real business challenges and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-700 hover:-translate-y-4 bg-gradient-card animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <CardContent className="relative p-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-primary shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <div className="text-white">{solution.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                          <ChevronRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                        </div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 font-bold group-hover:gap-3 gap-2 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              ADVANTAGES
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience excellence in every aspect of our service delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-card border-2 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-hover hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 mb-6">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.15),transparent_70%)]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <TrendingUp className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Ready to Scale?</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Let's Build Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
              Extraordinary
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Join hundreds of forward-thinking companies who have already transformed their business with our solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 shadow-glow hover:shadow-xl transition-all duration-500 hover:scale-110 px-12 py-8 text-lg font-bold rounded-full group">
                Start Your Journey
                <Rocket className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-primary shadow-glow backdrop-blur-md transition-all duration-500 hover:scale-110 px-12 py-8 text-lg font-bold rounded-full">
                Learn About Us
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
