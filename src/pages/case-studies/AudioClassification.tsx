import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const AudioClassificationCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="Audio Classification CNN"
      subtitle="Deep learning research comparing CNN architectures for audio classification. Task-specific model achieved 92% accuracy, outperforming transfer learning by 26%."
      heroImage="/images/projects/audio-cnn.png"
      tags={["TensorFlow", "Keras", "librosa", "YAMNet", "Deep Learning"]}
      stats={[
        { label: "Status", value: "Complete" },
        { label: "Role", value: "Team of 3" },
        { label: "Test Accuracy", value: "92%" },
        { label: "Course", value: "CSCI 6366 @ GWU" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/audio-classification-cnn",
      }}
    >
      <section className="mb-12">
        <h2>Overview</h2>
        <p className="text-lg leading-relaxed mb-6">
          This was a research project for my Neural Networks & Deep Learning
          course at GWU, where I worked with two teammates to systematically
          compare different approaches to audio classification. We tested five
          architectures—from simple CNNs to Vision Transformers—on a three-class
          animal sound classification task (dog, cat, bird). Our key finding
          challenged a common assumption in deep learning: a task-specific CNN
          trained from scratch achieved 92% test accuracy, significantly
          outperforming YAMNet transfer learning at 66% accuracy—a 26%
          improvement.
        </p>

        <div className="mb-6 p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
          <p className="text-sm font-semibold text-accent-primary mb-3">
            RESEARCH QUESTION
          </p>
          <p className="text-lg font-semibold mb-2">
            Can task-specific CNNs trained from scratch outperform transfer
            learning for audio classification?
          </p>
          <p className="text-sm text-text-muted">
            <strong>Answer:</strong> Yes—when domain alignment is poor and you
            have sufficient labeled data, task-specific training can
            significantly outperform large pre-trained models.
          </p>
        </div>

        <div className="mb-6 p-6 rounded-2xl bg-bg-surface/50 border border-border-primary/50">
          <p className="text-sm font-semibold mb-3">TEAM</p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>Members:</strong> Shambhavi Adhikari, Rakshitha Mamilla,
              Abhiyan Sainju
            </p>
            <p>
              <strong>My Contributions:</strong> Implemented baseline CNN and
              regularization experiments, conducted transfer learning
              comparisons, documented results and findings, collaborative
              experimentation and analysis
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>The Challenge</h2>
        <p className="text-lg leading-relaxed mb-4">
          Audio classification presents several challenges: limited labeled data
          for specific tasks, the common assumption that transfer learning is
          always superior, and uncertainty about whether pre-trained models
          (trained on large datasets like AudioSet) generalize well to all audio
          tasks. We wanted to understand the tradeoffs between custom models and
          transfer learning.
        </p>
        <p className="leading-relaxed">
          Our goal was to compare multiple approaches to audio classification
          and determine which works best for a focused three-class animal sound
          classification task. We systematically tested five different
          architectures to understand when transfer learning helps and when it
          doesn't.
        </p>
      </section>

      <section className="mb-12">
        <h2>My Approach</h2>
        <p className="text-lg leading-relaxed mb-6">
          We designed a rigorous experimental methodology: start with a simple
          baseline, systematically add complexity, and compare against transfer
          learning. We tested five architectures—baseline CNN, CNN with dropout,
          CRNN (CNN + Bidirectional GRU), Vision Transformer, and YAMNet
          transfer learning—using the same dataset and evaluation methodology.
        </p>

        <h3 className="text-xl font-semibold mb-4">Dataset & Preprocessing</h3>
        <p className="leading-relaxed mb-4">
          We used the{" "}
          <a
            href="https://www.kaggle.com/datasets/chiragchhaya/human-words-audio-classification"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:underline"
          >
            Human Words Audio Classification
          </a>{" "}
          dataset from Kaggle, which contains 610 audio clips (dog, cat, bird)
          of 1-second duration at 16 kHz. We converted audio to Mel-spectrograms
          (128×128 resolution) using librosa, normalized using min-max scaling,
          and reshaped to (128, 128, 1) for CNN input. We used stratified
          splits: 440 train / 78 validation / 92 test.
        </p>

        <h3 className="text-xl font-semibold mb-4">Architectures Explored</h3>
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <h4 className="font-semibold text-lg mb-2">
              1. Baseline CNN (90% test accuracy)
            </h4>
            <p className="text-sm text-text-muted mb-3 font-mono">
              Conv2D(32, 3×3) → MaxPool(2×2) → Conv2D(64, 3×3) → MaxPool(2×2) →
              Flatten → Dense(64, ReLU) → Dense(3, softmax)
            </p>
            <p className="leading-relaxed text-sm">
              Simple two-layer CNN as a baseline. Fast training, straightforward
              architecture. Achieved 90% test accuracy with 0.57 test loss.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-accent-primary/5 border border-accent-primary/20">
            <h4 className="font-semibold text-lg mb-2">
              2. CNN + Dropout (92% test accuracy) ⭐ Best Model
            </h4>
            <p className="text-sm text-text-muted mb-3 font-mono">
              Conv2D(32) → MaxPool → Conv2D(64) → MaxPool → Conv2D(128) →
              MaxPool → Flatten → Dense(128, ReLU) → Dropout(0.5) → Dense(3,
              softmax)
            </p>
            <p className="leading-relaxed text-sm mb-3">
              Added a third convolutional layer and Dropout(0.5) regularization.
              This achieved <strong>92% test accuracy</strong> with{" "}
              <strong>0.24 test loss</strong> (vs 0.57 baseline). Precision,
              Recall, and F1-Score all at ~92% (macro-averaged). Better
              calibration and balanced performance across all three classes.
            </p>
            <p className="text-xs text-text-muted italic">
              Key insight: Regularization significantly improved generalization
              without increasing model complexity.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <h4 className="font-semibold text-lg mb-2">
              3. CRNN - CNN + Bidirectional GRU (78.69% val accuracy)
            </h4>
            <p className="text-sm text-text-muted mb-3 font-mono">
              Conv2D layers → BatchNorm → MaxPool → GlobalAveragePooling2D →
              Bidirectional GRU(128) → Dropout(0.3) → Dense(3, softmax)
            </p>
            <p className="leading-relaxed text-sm">
              Combined CNN feature extraction with temporal modeling using
              Bidirectional GRU. Achieved 78.69% validation accuracy. Shows
              temporal modeling is viable, but more complex architecture didn't
              beat simpler CNN+Dropout.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <h4 className="font-semibold text-lg mb-2">
              4. Vision Transformer (ViT) (35-40% val accuracy)
            </h4>
            <p className="text-sm text-text-muted mb-3 font-mono">
              PatchLayer (16×16) → PatchEmbedding → Transformer encoder blocks →
              GlobalAveragePooling1D → Dense(3, softmax)
            </p>
            <p className="leading-relaxed text-sm">
              Implemented Vision Transformer with patch-based attention.
              Achieved only 35-40% validation accuracy (near random guessing).
              Loss: 1.09-1.12. <strong>Severely underfits</strong>—transformers
              need much more data than we had (610 clips).
            </p>
            <p className="text-xs text-text-muted italic mt-2">
              Learning: Transformers require large datasets. Our 610-sample
              dataset was insufficient for ViT to learn meaningful patterns.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <h4 className="font-semibold text-lg mb-2">
              5. Transfer Learning - YAMNet (66% test accuracy)
            </h4>
            <p className="text-sm text-text-muted mb-3 font-mono">
              YAMNet (pre-trained on AudioSet) → Extract 1024-D embeddings →
              Average/Flatten → Dense classifier head
            </p>
            <p className="leading-relaxed text-sm mb-3">
              Tested two approaches: (1) Averaged embeddings (62% accuracy) and
              (2) Full sequence embeddings (66% accuracy). Both significantly
              underperformed our task-specific CNN.
            </p>
            <p className="text-xs text-text-muted italic">
              Why it underperformed: YAMNet was trained on AudioSet (general
              audio events), but our task is focused (dog/cat/bird). Domain
              mismatch between pre-training and target task.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Results Comparison</h2>
        <div className="overflow-x-auto mb-6">
          <table className="case-study-table w-full">
            <thead>
              <tr>
                <th>Model</th>
                <th>Test/Val Accuracy</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>F1-Score</th>
                <th>Loss</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-accent-primary/5">
                <td>
                  <strong>CNN + Dropout</strong>
                </td>
                <td>
                  <strong>92%</strong> (test)
                </td>
                <td>
                  <strong>92%</strong>
                </td>
                <td>
                  <strong>92%</strong>
                </td>
                <td>
                  <strong>92%</strong>
                </td>
                <td>
                  <strong>0.24</strong>
                </td>
                <td>
                  <strong>Best model</strong>
                </td>
              </tr>
              <tr>
                <td>Baseline CNN</td>
                <td>90% (test)</td>
                <td>90%</td>
                <td>90%</td>
                <td>90%</td>
                <td>0.57</td>
                <td>Good baseline</td>
              </tr>
              <tr>
                <td>CRNN</td>
                <td>78.69% (val)</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>0.80</td>
                <td>Temporal modeling</td>
              </tr>
              <tr>
                <td>YAMNet (sequence)</td>
                <td>66% (test)</td>
                <td>60%</td>
                <td>58%</td>
                <td>58%</td>
                <td>0.96</td>
                <td>Transfer learning</td>
              </tr>
              <tr>
                <td>YAMNet (averaged)</td>
                <td>62% (test)</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>0.90</td>
                <td>Transfer learning</td>
              </tr>
              <tr>
                <td>ViT</td>
                <td>35-40% (val)</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>1.10</td>
                <td>Underfits</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-text-muted italic">
          All metrics macro-averaged across three classes (dog, cat, bird)
        </p>
      </section>

      <section className="mb-12">
        <h2>Key Research Finding</h2>
        <div className="p-6 rounded-xl bg-accent-primary/5 border border-accent-primary/20 mb-6">
          <h3 className="text-xl font-semibold mb-4">
            Transfer Learning Is Not Always Better
          </h3>
          <p className="leading-relaxed mb-4">
            Our experiment showed that a task-specific CNN (92% accuracy)
            significantly outperformed transfer learning with YAMNet (66%
            accuracy)—a <strong>26% improvement</strong>. This challenges the
            common assumption that transfer learning is always superior.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold mb-2">
                Why Transfer Learning Underperformed:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-text-muted">
                <li>
                  YAMNet trained on AudioSet (general audio events like "car
                  horn," "dog bark," "footsteps")
                </li>
                <li>Our task is focused (dog/cat/bird classification)</li>
                <li>Domain mismatch between pre-training and target task</li>
                <li>
                  Small dataset size (610 clips) makes task-specific training
                  viable
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-border-primary/50">
              <h4 className="font-semibold mb-2">
                When Transfer Learning Works:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-text-muted">
                <li>Very limited labeled data</li>
                <li>Task similar to pre-training domain</li>
                <li>Need quick baseline without compute for training</li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-border-primary/50">
              <h4 className="font-semibold mb-2">
                When Training From Scratch Works:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-text-muted">
                <li>Sufficient labeled data (our case: 610 clips)</li>
                <li>Focused, specific task</li>
                <li>Domain mismatch with available pre-trained models</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Technical Implementation</h2>
        <h3 className="text-xl font-semibold mb-4">Data Pipeline</h3>
        <p className="leading-relaxed mb-4">
          We used librosa for audio processing: load audio at 16 kHz, compute
          Mel-spectrograms (n_fft=1024, hop_length=512, n_mels=128), convert to
          dB scale, normalize to [0, 1], and reshape to (128, 128, 1) for CNN
          input. This transforms 1-second audio clips into 2D image-like
          representations that CNNs can process.
        </p>

        <h3 className="text-xl font-semibold mb-4">Training Configuration</h3>
        <p className="leading-relaxed mb-4">
          All models used Adam optimizer, categorical crossentropy loss, and
          comprehensive metrics (accuracy, precision, recall, F1-score). We
          implemented early stopping (patience=10), model checkpointing, and
          learning rate scheduling. We used stratified splits to maintain class
          distribution and kept a separate test set that was never seen during
          training.
        </p>

        <h3 className="text-xl font-semibold mb-4">Evaluation Methodology</h3>
        <p className="leading-relaxed">
          We used stratified splits to maintain class distribution, kept a
          separate test set never seen during training, computed comprehensive
          metrics (not just accuracy), generated confusion matrices for
          per-class analysis, and ran multiple random seeds to verify
          consistency. This rigorous methodology ensured our findings were
          reliable and reproducible.
        </p>
      </section>

      <section className="mb-12">
        <h2>What I Learned</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              1. Transfer Learning Isn't Automatic
            </h3>
            <p className="leading-relaxed">
              The biggest takeaway: transfer learning isn't always the best
              approach. Domain alignment matters more than model size.
              Task-specific models can outperform large pre-trained models when
              there's a domain mismatch. Small, focused datasets can favor
              custom training over transfer learning.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              2. Regularization Is Critical
            </h3>
            <p className="leading-relaxed">
              Dropout(0.5) significantly improved results: reduced test loss
              from 0.57 → 0.24, maintained high accuracy (92%), and improved
              model calibration. This showed that proper regularization can make
              a substantial difference even with relatively simple
              architectures.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              3. Complexity ≠ Performance
            </h3>
            <p className="leading-relaxed">
              Simpler CNN outperformed complex architectures: CRNN with GRU
              achieved 78.69%, Vision Transformer achieved 35-40%, but simple
              CNN + Dropout achieved 92%. This reinforced that model complexity
              should match the problem complexity and dataset size.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">4. Research Process</h3>
            <p className="leading-relaxed">
              Conducting systematic experiments taught me the importance of
              proper train/val/test splits, comprehensive metrics beyond
              accuracy, comparing multiple approaches rigorously, and
              documenting findings clearly. This project gave me hands-on
              experience with the experimental methodology that's essential for
              ML research.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2>Tech Stack Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="case-study-table w-full">
            <thead>
              <tr>
                <th>Category</th>
                <th>Technologies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Deep Learning</strong>
                </td>
                <td>TensorFlow, Keras</td>
              </tr>
              <tr>
                <td>
                  <strong>Audio Processing</strong>
                </td>
                <td>librosa</td>
              </tr>
              <tr>
                <td>
                  <strong>Data Science</strong>
                </td>
                <td>NumPy, pandas, scikit-learn</td>
              </tr>
              <tr>
                <td>
                  <strong>Transfer Learning</strong>
                </td>
                <td>YAMNet (pre-trained on AudioSet)</td>
              </tr>
              <tr>
                <td>
                  <strong>Architectures</strong>
                </td>
                <td>CNN, CRNN (CNN + GRU), Vision Transformer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2>Repository Highlights</h2>
        <p className="leading-relaxed mb-4">
          The repository is well-structured with organized notebooks, complete
          documentation, and reproducible experiments:
        </p>
        <ul className="list-disc list-inside space-y-2 text-text-muted mb-4">
          <li>
            <strong>/data/</strong> - Organized by class (dog, cat, bird)
          </li>
          <li>
            <strong>/notebooks/</strong> - 7 exploration notebooks with clear
            progression from EDA → baseline → experiments
          </li>
          <li>
            <strong>/models/</strong> - Saved model weights
          </li>
          <li>
            <strong>FINAL_project_submission.ipynb</strong> - Complete
            consolidated work
          </li>
          <li>
            <strong>README.md</strong> - Comprehensive documentation
          </li>
          <li>
            <strong>Audio Classification CNN.pdf</strong> - Final report
          </li>
        </ul>
        <p className="text-sm text-text-muted">
          <strong>205 commits</strong> - Iterative development and
          experimentation
        </p>
      </section>

      <section className="mb-12">
        <h2>Explore the Project</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/aabhiyann/audio-classification-cnn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50 hover:border-accent-primary/50 transition-colors group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-primary transition-colors">
              View Source Code
            </h3>
            <p className="text-sm text-text-muted">
              Complete implementation with notebooks, models, and documentation
            </p>
          </a>
          <a
            href="https://github.com/aabhiyann/audio-classification-cnn/blob/main/Audio%20Classification%20CNN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50 hover:border-accent-primary/50 transition-colors group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-accent-primary transition-colors">
              Read Final Report
            </h3>
            <p className="text-sm text-text-muted">
              Comprehensive PDF report with all findings and analysis
            </p>
          </a>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default AudioClassificationCaseStudy;
