import { useParams } from "react-router-dom";
import Page from "../components/Page";
import Prose from "../components/Prose";
import { articles } from "../data/articles";

function DeepDiveDetail() {
  const { slug } = useParams();
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return (
      <Page>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 font-heading">
              Article not found
            </h1>
          </div>
        </section>
      </Page>
    );
  }

  return (
    <Page>
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Prose>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-text-primary mb-6 font-heading">
              {article.title}
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              {article.abstract}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-light dark:text-muted-dark mb-8">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-blue-500/20 relative overflow-hidden rounded-2xl mb-8"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget
              aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies
              lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet
              nisl.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget
              aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies
              lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet
              nisl.
            </p>
          </Prose>
        </div>
      </section>
    </Page>
  );
}

export default DeepDiveDetail;
