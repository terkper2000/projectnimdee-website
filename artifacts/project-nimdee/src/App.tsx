import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Support from "@/pages/Support";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Science10 from "@/pages/Science10";
import Science10UnitA from "@/pages/Science10UnitA";
import Science10UnitB from "@/pages/Science10UnitB";
import Science10UnitC from "@/pages/Science10UnitC";
import Science10UnitD from "@/pages/Science10UnitD";
import Biology20 from "@/pages/Biology20";
import Biology30 from "@/pages/Biology30";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resources/science-10/unit-a" component={Science10UnitA} />
      <Route path="/resources/science-10/unit-b" component={Science10UnitB} />
      <Route path="/resources/science-10/unit-c" component={Science10UnitC} />
      <Route path="/resources/science-10/unit-d" component={Science10UnitD} />
      <Route path="/resources/science-10" component={Science10} />
      <Route path="/resources/biology-20" component={Biology20} />
      <Route path="/resources/biology-30" component={Biology30} />
      <Route path="/resources" component={Resources} />
      <Route path="/support" component={Support} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
