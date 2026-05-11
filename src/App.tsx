import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="font-sans tracking-widest text-white/40 uppercase text-sm">404 — Not Found</p>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useSmoothScroll();

  return (
    <WouterRouter>
      <Router />
    </WouterRouter>
  );
}

export default App;
