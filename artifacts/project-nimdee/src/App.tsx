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
import Biology20Flashcards from "@/pages/Biology20Flashcards";
import Biology20Quiz from "@/pages/Biology20Quiz";
import Biology20UnitA from "@/pages/Biology20UnitA";
import Biology20UnitB from "@/pages/Biology20UnitB";
import Biology20UnitC from "@/pages/Biology20UnitC";
import Biology20UnitD from "@/pages/Biology20UnitD";
import Biology30 from "@/pages/Biology30";
import Math9 from "@/pages/Math9";
import Math9Unit1 from "@/pages/Math9Unit1";
import Math9Unit2 from "@/pages/Math9Unit2";
import Math9Unit3 from "@/pages/Math9Unit3";
import Math9Unit4 from "@/pages/Math9Unit4";
import Math9Unit5 from "@/pages/Math9Unit5";
import Math9Unit6 from "@/pages/Math9Unit6";
import Math9Unit7 from "@/pages/Math9Unit7";
import Math9Unit8 from "@/pages/Math9Unit8";

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
      <Route path="/resources/biology-20/flashcards" component={Biology20Flashcards} />
      <Route path="/resources/biology-20/quiz" component={Biology20Quiz} />
      <Route path="/resources/biology-20/unit-a" component={Biology20UnitA} />
      <Route path="/resources/biology-20/unit-b" component={Biology20UnitB} />
      <Route path="/resources/biology-20/unit-c" component={Biology20UnitC} />
      <Route path="/resources/biology-20/unit-d" component={Biology20UnitD} />
      <Route path="/resources/biology-20" component={Biology20} />
      <Route path="/resources/biology-30" component={Biology30} />
      <Route path="/resources/math-9/unit-1" component={Math9Unit1} />
      <Route path="/resources/math-9/unit-2" component={Math9Unit2} />
      <Route path="/resources/math-9/unit-3" component={Math9Unit3} />
      <Route path="/resources/math-9/unit-4" component={Math9Unit4} />
      <Route path="/resources/math-9/unit-5" component={Math9Unit5} />
      <Route path="/resources/math-9/unit-6" component={Math9Unit6} />
      <Route path="/resources/math-9/unit-7" component={Math9Unit7} />
      <Route path="/resources/math-9/unit-8" component={Math9Unit8} />
      <Route path="/resources/math-9" component={Math9} />
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
