import { Link } from "react-router-dom";
import Page from "../components/Page";
import SEO from "../components/SEO";

function DeepDiveDetail() {
  return (
    <Page>
      <SEO
        title="Deep Dive Article"
        description="In-depth articles by Abhiyan Sainju are hosted on external platforms like Medium and Dev.to."
      />
      <section className="py-24 min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-6 font-heading">
            Article Not Found
          </h1>
          <p className="text-xl text-text-muted mb-8 leading-relaxed">
            This article could not be found. My in-depth articles are hosted on
            external platforms.
          </p>
          <Link
            to="/#digital-footprint"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black shadow-sm hover:bg-gray-200 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </section>
    </Page>
  );
}

export default DeepDiveDetail;
