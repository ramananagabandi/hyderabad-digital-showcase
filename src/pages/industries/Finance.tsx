import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, Zap, Globe } from "lucide-react";

const Finance = () => {
  const features = [
    {
      icon: Shield,
      title: "Security First",
      description: "Advanced cybersecurity measures and compliance frameworks to protect financial data and transactions."
    },
    {
      icon: TrendingUp,
      title: "Digital Innovation",
      description: "Cutting-edge fintech solutions including blockchain, AI, and machine learning for financial services."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "High-performance systems for real-time transaction processing and instant financial analytics."
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Comprehensive regulatory compliance solutions for international financial regulations and standards."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm mb-4 text-white/80">
            <Link to="/" className="hover:text-white">Home</Link> &gt; <Link to="/industries" className="hover:text-white">Industries</Link> &gt; Finance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            FINANCE
          </h1>
          <div className="max-w-4xl">
            <p className="text-xl mb-6 text-white/90">
              The world runs on it and relies on it. This sector is a lynchpin of the economy, and the backbone upon which business depends.
            </p>
            <p className="text-lg text-white/80">
              Our work with large financial clients has given us an insight on their culture, expectations, and especially the immense breadth of their technological needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Finance.png"
                alt="Finance technology solutions"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Accelerating Complex Digital Transformations
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We work to accelerate their complex digital transformations in ways that emphasize security and complete compatibility with existing systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                None of that would be possible without our in-depth knowledge of the technology of today and of tomorrow. Add to it our expertise and experience and it adds up to one thing: Cofomo.
              </p>
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Learn more
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Financial Technology Excellence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Financial Services Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Core Banking Solutions</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Digital banking platforms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Payment processing systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Mobile banking applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Risk management systems</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Advanced Technologies</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Blockchain integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>AI-powered analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Open banking APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Cloud infrastructure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl italic mb-6">
            "Our in-depth knowledge of the technology of today and of tomorrow, combined with our expertise and experience, makes us the ideal partner for financial institutions."
          </blockquote>
          <cite className="text-lg font-bold text-primary">Cofomo Financial Services Team</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can accelerate your digital transformation with security and compatibility
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Contact Our Financial Experts
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Finance;