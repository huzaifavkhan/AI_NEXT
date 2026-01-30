import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Prototype from "./pages/Prototype";
import MashreqOutbound from "./pages/MashreqOutbound";
import TakeoffOutbound from "./pages/TakeoffOutbound";
import TakeoffInbound from "./pages/TakeoffInbound";
import TakeoffAvatar from "./pages/TakeoffAvatar";
import JSDebtCollection from "./pages/JSDebtCollection";
import TrendyolCalls from "./pages/TrendyolCalls";
import Dashboard from "./pages/Dashboard"
import FibaBank from "./pages/FibaBank";
import DIB from "./pages/DIB";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prototype" element={<Prototype />} />
          <Route path="/mashreq/outbound" element={<MashreqOutbound />} />
          <Route path="/takeoff/outbound" element={<TakeoffOutbound />} />
          <Route path="/takeoff/inbound" element={<TakeoffInbound />} />
          <Route path="/takeoff/avatar" element={<TakeoffAvatar />} />
          <Route path="/js-debt-collection-calls" element={<JSDebtCollection />} />
          <Route path="/trendyol/calls" element={<TrendyolCalls />} />
          <Route path="/kepler/dashboard" element={<Dashboard />} />
          <Route path="/fibabanka/hr-screening" element={<FibaBank />} />
          <Route path="/dib/inbound" element={<DIB />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
