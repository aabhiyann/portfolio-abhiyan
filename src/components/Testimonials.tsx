import { motion } from "framer-motion";
import { testimonials } from "../data/Testimonials";
import SectionTitle from "./SectionTitle";

const Testimonials = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          title="Testimonials"
          subtitle="What my colleagues and mentors say about my work."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-white/80 mb-6 flex-grow italic">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-white/60">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
