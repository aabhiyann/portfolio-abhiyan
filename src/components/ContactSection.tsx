import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Button from "./ui/Button";
import SectionTitle from "./SectionTitle";

const ContactSection: React.FC = () => {
  return (
    <section
      className="py-24 bg-bg-primary relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
        <SectionTitle
          title="Contact"
          subtitle="Open to roles, collaborations, and good technical conversations."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="p-8 rounded-2xl bg-card border border-border-primary w-full shadow-sm">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Drop me a message
            </h3>
            <p className="text-text-muted mb-4">aabhiyansainju@gmail.com</p>
            <p className="text-text-muted text-sm mb-8">
              Based in Washington, DC. Open to roles across the US.
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
                Get in Touch
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
