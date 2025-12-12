import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Photography = lazy(() => import("./pages/Photography"));
const About = lazy(() => import("./pages/About"));
const Resume = lazy(() => import("./pages/Resume"));
const DeepDives = lazy(() => import("./pages/DeepDives"));
const DeepDiveDetail = lazy(() => import("./pages/DeepDiveDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/deep-dives" element={<DeepDives />} />
                <Route path="/deep-dives/:slug" element={<DeepDiveDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
