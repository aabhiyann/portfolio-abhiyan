import { motion } from 'framer-motion';
import { BookOpen, Code, Lightbulb, MapPin } from 'lucide-react';
import Page from '../components/Page';
import SEO from '../components/SEO';

export default function Now() {
    const lastUpdated = 'January 2026';

    return (
        <Page>
            <SEO
                title="What I'm Doing Now | Abhiyan Sainju"
                description="Current projects, learning, and interests - updated regularly."
            />

            <section className="py-24 min-h-screen">
                <div className="max-w-3xl mx-auto px-6 md:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                            What I'm Up To Now
                        </h1>
                        <p className="text-text-muted flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Washington DC, US · Last updated: {lastUpdated}
                        </p>
                    </motion.div>

                    {/* Currently Working On */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="glass-card rounded-2xl p-8 border border-border-primary mb-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                                <Code className="w-5 h-5 text-accent-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary">
                                Currently Working On
                            </h2>
                        </div>
                        <div className="space-y-4 text-text-secondary">
                            <div>
                                <h3 className="font-semibold text-text-primary mb-2">
                                    Seeking Full-Time Software Engineering Opportunities
                                </h3>
                                <p className="text-sm">
                                    Recent MS Computer Science graduate from GWU, actively looking for full-time roles in
                                    full-stack development, AI/ML engineering, or cloud infrastructure.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-text-primary mb-2">
                                    Building Personal Projects
                                </h3>
                                <p className="text-sm">
                                    Working on AI-powered applications and contributing to open source.
                                    Keeping skills sharp with React, Python, and modern cloud technologies.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Currently Learning */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="glass-card rounded-2xl p-8 border border-border-primary mb-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                                <Lightbulb className="w-5 h-5 text-accent-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary">
                                Currently Learning
                            </h2>
                        </div>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex items-start gap-3">
                                <span className="text-accent-primary mt-1">•</span>
                                <div>
                                    <span className="font-semibold text-text-primary">Advanced System Design</span>
                                    <p className="text-sm mt-1">
                                        Distributed systems patterns, scalability, and high-performance architectures.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent-primary mt-1">•</span>
                                <div>
                                    <span className="font-semibold text-text-primary">LLMs & AI Engineering</span>
                                    <p className="text-sm mt-1">
                                        RAG systems, vector databases, and production ML deployment strategies.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent-primary mt-1">•</span>
                                <div>
                                    <span className="font-semibold text-text-primary">Cloud Infrastructure</span>
                                    <p className="text-sm mt-1">
                                        Kubernetes, serverless architectures, and infrastructure as code.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Currently Reading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        className="glass-card rounded-2xl p-8 border border-border-primary mb-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-accent-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-text-primary">
                                Currently Reading
                            </h2>
                        </div>
                        <ul className="space-y-3 text-text-secondary">
                            <li className="flex items-start gap-3">
                                <span className="text-accent-primary mt-1">•</span>
                                <div>
                                    <span className="font-semibold text-text-primary">
                                        "Designing Data-Intensive Applications" by Martin Kleppmann
                                    </span>
                                    <p className="text-sm mt-1">Essential reading for building scalable systems.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent-primary mt-1">•</span>
                                <div>
                                    <span className="font-semibold text-text-primary">
                                        "The Pragmatic Programmer" by David Thomas & Andrew Hunt
                                    </span>
                                    <p className="text-sm mt-1">Timeless software craftsmanship principles.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Footer Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12 p-6 rounded-xl bg-accent-primary/5 border border-accent-primary/20"
                    >
                        <p className="text-sm text-text-muted">
                            This page is guided by{' '}
                            <a
                                href="https://nownownow.com/about"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-primary hover:underline"
                            >
                                nownownow.com
                            </a>
                            {' '}— a reminder to keep this page simple, honest, and current.
                        </p>
                    </motion.div>
                </div>
            </section>
        </Page>
    );
}
