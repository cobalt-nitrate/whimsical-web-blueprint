
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Research from "./pages/Research";
import Enterprises from "./pages/Enterprises";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AIToolkit from "./pages/AIToolkit";
import Models from "./pages/Models";
import Training from "./pages/Training";
import Evaluations from "./pages/Evaluations";
import FineTuning from "./pages/FineTuning";
import Percepta from "./pages/Percepta";

const queryClient = new QueryClient();

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/enterprises" element={<Enterprises />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/ai-toolkit" element={<AIToolkit />} />
          <Route path="/models" element={<Models />} />
          <Route path="/training" element={<Training />} />
          <Route path="/evaluations" element={<Evaluations />} />
          <Route path="/fine-tuning" element={<FineTuning />} />
          <Route path="/percepta" element={<Percepta />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
