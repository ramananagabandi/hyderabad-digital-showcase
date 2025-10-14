import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award } from "lucide-react";
const OurCompany = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">
              Our Company
            </h1>
            <p className="text-xl text-white/90 mb-8">COFOMO Tech is an Indian leader in IT and business consulting services, dedicated to innovation and technological advancement.</p>
            <Button variant="secondary" size="lg" className="bg-accent text-primary hover:bg-accent/90">
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years of Innovation</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We constantly push the boundaries of technology to deliver cutting-edge solutions for our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients as true partners, understanding their unique challenges and goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in everything we do, from project delivery to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      
    </div>;
};
export default OurCompany;