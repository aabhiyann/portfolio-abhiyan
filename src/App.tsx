import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Photography from "./pages/Photography";
import About from "./pages/About";
import DeepDives from "./pages/DeepDives";
import DeepDiveDetail from "./pages/DeepDiveDetail";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <Layout>
        <AnimatePresence mode="wait">
          <ErrorBoundary>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/about" element={<About />} />
              <Route path="/deep-dives" element={<DeepDives />} />
              <Route path="/deep-dives/:slug" element={<DeepDiveDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Root;
