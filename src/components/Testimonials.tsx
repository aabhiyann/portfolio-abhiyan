import { motion } from "framer-motion";
import { testimonials } from "../data/Testimonials";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          title="Testimonials"
          subtitle="What my colleagues and mentors say about my work."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-black/5 dark:border-white/20 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-text-muted mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-text-primary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
