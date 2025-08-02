import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Technologies from "./pages/Technologies";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import ConsultingServices from "./pages/services/ConsultingServices";
import ApplicationServices from "./pages/services/ApplicationServices";
import OurCompany from "./pages/about/OurCompany";
import Healthcare from "./pages/industries/Healthcare";
import Insurance from "./pages/industries/Insurance";
import Finance from "./pages/industries/Finance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-company" element={<OurCompany />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/consulting-services" element={<ConsultingServices />} />
          <Route path="/services/application-services" element={<ApplicationServices />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
