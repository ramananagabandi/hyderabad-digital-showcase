import { Badge } from "@/components/ui/badge";

const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using TechSolutions services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2>2. Services</h2>
          <p>TechSolutions provides IT consulting, software development, and related technology services to businesses and organizations.</p>
          
          <h2>3. Intellectual Property</h2>
          <p>All content, code, and intellectual property developed by TechSolutions remains the property of TechSolutions unless otherwise agreed in writing.</p>
          
          <h2>4. Limitation of Liability</h2>
          <p>TechSolutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
          
          <h2>5. Contact</h2>
          <p>For questions about these terms, contact us at legal@techsolutions.com</p>
        </div>
      </section>
    </div>
  );
};

export default Terms;