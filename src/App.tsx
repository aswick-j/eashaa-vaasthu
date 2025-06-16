
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuildingPlanApproval from "./pages/BuildingPlanApproval";
import PlanSanction from "./pages/PlanSanction";
import Estimation from "./pages/Estimation";
import FloorPlan from "./pages/FloorPlan";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/building-plan-approval" element={<BuildingPlanApproval />} />
          <Route path="/plan-sanction" element={<PlanSanction />} />
          <Route path="/estimation" element={<Estimation />} />
          <Route path="/floor-plans" element={<FloorPlan />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
