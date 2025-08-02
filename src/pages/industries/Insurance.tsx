import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, TrendingUp, Users, Zap } from "lucide-react";

const Insurance = () => {
  const features = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Advanced security measures and regulatory compliance to protect sensitive insurance data and meet industry standards."
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies to modernize insurance operations and improve customer experience."
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Enhanced customer journey through digital channels, self-service portals, and streamlined claim processes."
    },
    {
      icon: Zap,
      title: "Agile Solutions",
      description: "Rapid deployment of insurance technology solutions with agile methodologies to stay ahead of market demands."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-background font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-sm mb-4 text-white/80">
            <Link to="/" className="hover:text-white">Home</Link> &gt; <Link to="/industries" className="hover:text-white">Industries</Link> &gt; Insurance
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            INSURANCE
          </h1>
          <div className="max-w-4xl">
            <p className="text-xl mb-6 text-white/90">
              We get it. Insurance is a sector where it's essential to be agile and at the cutting edge of technology.
            </p>
            <p className="text-lg text-white/80">
              We translate strategy into action and work diligently in this specialized environment to successfully complete large-scale projects and help stakeholders attain their objectives.
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
                src="https://www.cofomo.com/wp-content/uploads/2024/06/Section-Industries-Insurance.png"
                alt="Insurance technology solutions"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Technology, expertise, and sustained growth
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Technology, expertise, and sustained growth are needed to stay ahead of the game. Our work is done at the leading edge so our clients can do what they do best. Succeed.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique challenges of the insurance industry, from regulatory compliance to customer expectations, and we deliver solutions that address these specific needs.
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
            Comprehensive Insurance Technology Solutions
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
              Our Insurance Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Digital Solutions</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Policy management systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Claims processing automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Customer portals and mobile apps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Underwriting platforms</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Technology Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Legacy system modernization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Cloud migration and strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Data analytics and reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>Integration services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Insurance Operations?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help you stay ahead in the competitive insurance market
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Contact Our Insurance Experts
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Insurance;