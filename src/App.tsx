import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About")); // Restored
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Photography = lazy(() => import("./pages/Photography"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const DeepDives = lazy(() => import("./pages/DeepDives"));
const DeepDiveDetail = lazy(() => import("./pages/DeepDiveDetail"));
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
                <Route path="/about" element={<About />} /> {/* Restored */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/brief" element={<Resume />} />{" "}
                {/* Alias for resume if needed, or keep /resume */}
                <Route path="/deep-dives" element={<DeepDives />} />
                <Route path="/deep-dives/:slug" element={<DeepDiveDetail />} />
                <Route
                  path="/case-studies/infrasight"
                  element={<InfraSightCaseStudy />}
                />
                <Route
                  path="/case-studies/talkifydocs"
                  element={<TalkifyDocsCaseStudy />}
                />
                <Route
                  path="/case-studies/melodyhub"
                  element={<MelodyHubCaseStudy />}
                />
                <Route
                  path="/case-studies/audio-classification"
                  element={<AudioClassificationCaseStudy />}
                />
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
