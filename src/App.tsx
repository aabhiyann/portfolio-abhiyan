import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import PageErrorFallback from "./components/PageErrorFallback";
import { CommandPalette } from "./components/CommandPalette";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const DeepDives = lazy(() => import("./pages/DeepDives"));
const DeepDiveDetail = lazy(() => import("./pages/DeepDiveDetail"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Photography = lazy(() => import("./pages/Photography"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const InfraSightCaseStudy = lazy(
  () => import("./pages/case-studies/InfraSight"),
);
const TalkifyDocsCaseStudy = lazy(
  () => import("./pages/case-studies/TalkifyDocs"),
);
const MelodyHubCaseStudy = lazy(() => import("./pages/case-studies/MelodyHub"));
const AudioClassificationCaseStudy = lazy(
  () => import("./pages/case-studies/AudioClassification"),
);
const Uses = lazy(() => import("./pages/Uses"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <CommandPalette />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <Home />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/about"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <About />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/projects"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <Projects />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/experience"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <Experience />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/skills"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <Skills />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/photography"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <Photography />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/contact"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <Contact />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/resume"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <Resume />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/deep-dives"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <DeepDives />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/deep-dives/:slug"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <DeepDiveDetail />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/case-studies/infrasight"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <InfraSightCaseStudy />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/case-studies/talkifydocs"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <TalkifyDocsCaseStudy />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/case-studies/melodyhub"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <MelodyHubCaseStudy />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/case-studies/audio-classification"
                element={
                  <ErrorBoundary fallback={PageErrorFallback}>
                    <AudioClassificationCaseStudy />
                  </ErrorBoundary>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
