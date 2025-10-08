import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import { ThemeProvider } from "./contexts/ThemeContext";
import routes from "tempo-routes";

function App() {
  // Create combined routes array
  const appRoutes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />
    },
    {
      path: "/terms-of-service", 
      element: <TermsOfService />
    },
    // Add tempo routes if in development
    ...(import.meta.env.VITE_TEMPO === "true" ? routes : []),
    // Catch-all route for 404 - must be last
    {
      path: "*",
      element: <NotFound />
    }
  ];

  const routeElements = useRoutes(appRoutes);

  return (
    <ThemeProvider>
      <Suspense fallback={<p>Loading...</p>}>
        {routeElements}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;