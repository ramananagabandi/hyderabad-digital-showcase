import { Badge } from "@/components/ui/badge";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you contact us or use our services.</p>
          
          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services.</p>
          
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties.</p>
          
          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
          
          <h2>5. Contact Us</h2>
          <p>For privacy concerns, contact us at privacy@techsolutions.com</p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;