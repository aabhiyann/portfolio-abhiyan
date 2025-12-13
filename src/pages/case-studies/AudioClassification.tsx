import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const AudioClassificationCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="Audio Classification CNN"
      subtitle="Deep learning research: Training a custom CNN from scratch to outperform transfer learning by 26%."
      heroImage="/images/case-studies/audio-classification.png"
      tags={["TensorFlow", "Keras", "Deep Learning", "Research"]}
      stats={[
        { label: "Accuracy", value: "92%" },
        { label: "Improvement", value: "+26%" },
        { label: "Architecture", value: "Custom CNN" },
        { label: "Status", value: "Research" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/audio-classification-cnn",
        live: "https://github.com/aabhiyann/audio-classification-cnn/blob/main/Audio%20Classification%20CNN.pdf", // Link to PDF report as "live" or similar
      }}
    >
      <section className="mb-12">
        <h2>At a Glance</h2>
        <p>
          This research project challenges the common assumption that transfer
          learning is always superior. By systematically comparing multiple
          architectures, our team demonstrated that a task-specific CNN trained
          from scratch could significantly outperform large pre-trained models
          for focused audio classification tasks.
        </p>
      </section>

      <section className="mb-12">
        <h2>Research Question</h2>
        <p className="text-xl font-medium text-text-primary italic border-l-4 border-accent-primary pl-4 my-6">
          "Can task-specific CNNs trained from scratch outperform transfer
          learning for audio classification?"
        </p>
        <p>
          We aimed to classify animal sounds (dog, cat, bird) using limited
          labeled data, comparing custom models against YAMNet (trained on
          AudioSet).
        </p>
      </section>

      <section className="mb-12">
        <h2>Key Findings</h2>
        <p>Our experiment yielded a surprising result:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="p-6 bg-accent-success/10 border border-accent-success/20 rounded-xl">
            <h4 className="font-bold text-accent-success mb-2">
              Custom CNN + Dropout
            </h4>
            <p className="text-3xl font-bold mb-1">92%</p>
            <p className="text-sm opacity-80">Test Accuracy</p>
          </div>
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl">
            <h4 className="font-bold text-red-400 mb-2">
              YAMNet (Transfer Learning)
            </h4>
            <p className="text-3xl font-bold mb-1">66%</p>
            <p className="text-sm opacity-80">Test Accuracy</p>
          </div>
        </div>
        <p>
          The <strong>26% performance gap</strong> highlights that domain
          alignment matters more than model size. Pre-trained models like
          YAMNet, while powerful, struggled because of the domain mismatch
          between their training data (general audio) and our specific target
          task.
        </p>
      </section>

      <section className="mb-12">
        <h2>Methodology</h2>
        <h3>Dataset & Preprocessing</h3>
        <p>
          We used the <strong>Human Words Audio Classification</strong> dataset
          (Kaggle), selecting 610 clips of dogs, cats, and birds.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Audio:</strong> 1-second mono .wav files at 16kHz.
          </li>
          <li>
            <strong>Feature Extraction:</strong> Converted to Mel-spectrograms
            (128x128) using Librosa.
          </li>
          <li>
            <strong>Normalization:</strong> Min-max scaling to [0, 1] range.
          </li>
          <li>
            <strong>Split:</strong> Stratified split (440 train / 78 val / 92
            test) to maintain class balance.
          </li>
        </ul>

        <h3>Architectures Tested</h3>
        <p>We systematically evaluated 5 architectures:</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Baseline CNN:</strong> Simple 2-layer Conv2D. Achieved ~90%.
          </li>
          <li>
            <strong>CNN + Dropout (Winner):</strong> Added a 3rd Conv layer and
            Dropout(0.5). Achieved <strong>92% accuracy</strong> and 0.24 loss.
            The dropout significantly improved calibration and reduced
            overfitting.
          </li>
          <li>
            <strong>CRNN (CNN + GRU):</strong> Added Bidirectional GRU for
            temporal modeling. Good (78%) but essentially over-engineered for
            short 1s clips.
          </li>
          <li>
            <strong>Vision Transformer (ViT):</strong> Severely underfit
            (35-40%) due to lack of massive training data.
          </li>
          <li>
            <strong>Transfer Learning (YAMNet):</strong> Both averaged and
            full-sequence embeddings failed to generalize well (66%).
          </li>
        </ol>
      </section>

      <section className="mb-12">
        <h2>What I Learned</h2>
        <h3>1. Transfer Learning Isn't Magic</h3>
        <p>
          Just because a model is "State of the Art" doesn't mean it fits your
          problem. Domain mismatch can severely cripple performance, making
          simpler, purpose-built models superior.
        </p>
        <h3>2. Regularization Wins</h3>
        <p>
          The jump from 90% (Baseline) to 92% (Final) was driven purely by
          adding <strong>Dropout(0.5)</strong>. This taught me that architecting
          for generalization is as important as architecting for capacity.
        </p>
        <h3>3. Systematic Research</h3>
        <p>
          This project wasn't just about getting a high score; it was about
          rigorously documenting <em>why</em> models failed or succeeded, using
          confusion matrices and proper train/test splits.
        </p>
      </section>

      <section className="mb-12">
        <h2>Why This Matters</h2>
        <p>
          This project demonstrates a <strong>research mindset</strong>. I
          didn't just import a library; I challenged assumptions, designed
          controlled experiments, and analyzed the results to derive engineering
          insights.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default AudioClassificationCaseStudy;
