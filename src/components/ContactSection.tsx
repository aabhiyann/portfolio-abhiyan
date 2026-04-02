import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Button from "./ui/Button";
import SectionTitle from "./SectionTitle";

const ContactSection: React.FC = () => {
  return (
    <section
      className="py-24 bg-bg-primary relative overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-accent-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <SectionTitle
          title="Get in Touch"
          subtitle="Open to work. Reach out directly."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-y border-border-primary/70 py-10"
        >
          <p className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-3">
            aabhiyansainju@gmail.com
          </p>
          <p className="text-text-muted text-sm mb-8">
            Based in Washington, DC. Open to relocation anywhere in the US.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            <Button
              as="a"
              href="mailto:aabhiyansainju@gmail.com"
              variant="primary"
              size="lg"
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Button>
            <Button
              as="a"
              href="https://linkedin.com/in/abhiyansainju"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              as="a"
              href="https://github.com/aabhiyann"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button
              as="a"
              href="https://instagram.com/abhiyan.sainju"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Photography
            </Button>
          </div>

          <p className="text-text-muted text-sm">
            I usually respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
