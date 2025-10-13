import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Rocket, Target, TrendingUp, ChevronRight, Lightbulb, Zap, Shield, Users2, BarChart3, Database, Layout, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
const Index = () => {
  const metrics = [{
    number: "50+",
    label: "Startups Launched",
    icon: <Rocket className="w-5 h-5" />
  }, {
    number: "$20M+",
    label: "Funding Raised",
    icon: <TrendingUp className="w-5 h-5" />
  }, {
    number: "3 Months",
    label: "Average MVP Time",
    icon: <Zap className="w-5 h-5" />
  }, {
    number: "90%",
    label: "Launch Success Rate",
    icon: <Target className="w-5 h-5" />
  }];
  const solutions = [{
    icon: <Rocket className="w-10 h-10" />,
    title: "MVP Development",
    description: "Launch your product in weeks, not months. We build fast, validate faster, and iterate smarter.",
    benefits: ["Rapid Prototyping", "Market Validation", "Scalable Architecture"]
  }, {
    icon: <Users2 className="w-10 h-10" />,
    title: "Growth Engineering",
    description: "Scale from 0 to 100K users with infrastructure that grows with your success.",
    benefits: ["Performance Optimization", "User Analytics", "A/B Testing"]
  }, {
    icon: <Target className="w-10 h-10" />,
    title: "Fundraising Support",
    description: "Pitch-perfect demos and metrics dashboards that investors love to see.",
    benefits: ["Investor Decks", "Live Demos", "Traction Metrics"]
  }];
  const features = [{
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Founder-Focused",
    description: "We speak startup. No corporate BS, just results"
  }, {
    icon: <Zap className="w-6 h-6" />,
    title: "Ship Fast",
    description: "Move at startup speed with agile development"
  }, {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Mindset",
    description: "Built to scale from day one to exit"
  }, {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Metrics That Matter",
    description: "Track KPIs investors actually care about"
  }];
  return <div className="min-h-screen overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-100 to-black">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-gray-200/50 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-300/30 to-black/70"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/40 backdrop-blur-md border border-black/10 mb-8 animate-fade-in shadow-lg">
            <Sparkles className="w-5 h-5 text-black" />
            <span className="text-sm font-semibold text-black tracking-wide">From Idea to Unicorn</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight animate-slide-up">
            <span className="text-black">Launch Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-600 to-black">
              Startup Dream
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium">
            We help founders turn bold ideas into thriving businesses. From MVP to scale, 
            we're your technical co-pilot on the journey to success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in">
            <Link to="/contact">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 px-10 py-8 text-lg font-bold group">
                Start Building
                <Rocket className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-black/30 text-black bg-white/50 hover:bg-black hover:text-white backdrop-blur-md transition-all duration-500 hover:scale-105 px-10 py-8 text-lg font-bold shadow-lg">
                See Our Work
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      

      {/* Solutions Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-bold text-sm mb-6">
              <Rocket className="w-4 h-4" />
              HOW WE HELP
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
              From Zero to Launch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, launch, and grow your startup from idea to product-market fit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => <Card key={index} className="group relative overflow-hidden border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-xl transition-all duration-700 hover:-translate-y-4 bg-white animate-fade-in" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <CardContent className="relative p-10">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-black shadow-card group-hover:shadow-hover transition-all duration-500 group-hover:scale-110">
                    <div className="text-white">{solution.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-black mb-4 group-hover:text-gray-700 transition-colors duration-500">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, idx) => <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-black">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black transition-all duration-300">
                          <ChevronRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                        </div>
                        {benefit}
                      </div>)}
                  </div>
                  
                  <Link to="/services" className="inline-flex items-center text-black hover:text-gray-600 font-bold group-hover:gap-3 gap-2 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white font-bold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              WHY STARTUPS CHOOSE US
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6">
              The Startup Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for founders, by founders. We understand the startup journey inside out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={index} className="group p-8 rounded-3xl bg-white border-2 border-gray-200 hover:border-black transition-all duration-500 hover:shadow-hover hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-500 group-hover:scale-110 mb-6">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-black text-black mb-3 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
            <Rocket className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Ready to Launch?</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Your Startup Story
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white">
              Starts Here
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Join 50+ founders who've turned their vision into reality. Let's build the next big thing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 shadow-elegant transition-all duration-500 hover:scale-105 px-12 py-8 text-lg font-bold group">
                Let's Talk
                <Rocket className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-500 hover:scale-105 px-12 py-8 text-lg font-bold">
                Our Story
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;