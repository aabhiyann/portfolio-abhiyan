import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import {
  CaseStudySection,
  CaseStudyImage,
  CaseStudyText,
} from "../../components/case-study";
import { Typography } from "../../components/ui";

const AudioClassificationCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="Audio Classification CNN"
      subtitle="Deep learning research comparing CNN architectures for audio classification. Task-specific model achieved 92% accuracy, outperforming transfer learning by 26%."
      heroImage="/images/case-studies/audio-classification/6_training_curves.png"
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
      <CaseStudySection title="Overview">
        <CaseStudyText>
          This was a research project for my Neural Networks & Deep Learning
          course at GWU, where I worked with two teammates to systematically
          compare different approaches to audio classification. I tested five
          architectures, from simple CNNs to Vision Transformers, on a
          three-class animal sound classification task (dog, cat, bird). My key
          finding challenged a common assumption in deep learning: a
          task-specific CNN trained from scratch achieved 92% test accuracy,
          significantly outperforming YAMNet transfer learning at 66% accuracy,
          a 26% improvement.
        </CaseStudyText>

        <div className="mb-6 p-6 rounded-2xl bg-accent-primary/5 border border-accent-primary/10">
          <Typography
            variant="small"
            className="font-semibold text-accent-primary mb-3 block uppercase tracking-wider"
          >
            RESEARCH QUESTION
          </Typography>
          <Typography variant="h3" className="mb-2 text-lg">
            Can task-specific CNNs trained from scratch outperform transfer
            learning for audio classification?
          </Typography>
          <Typography variant="body" color="muted" className="text-sm">
            <strong>Answer:</strong> Yes, when domain alignment is poor and you
            have sufficient labeled data, task-specific training can
            significantly outperform large pre-trained models.
          </Typography>
        </div>
      </CaseStudySection>

      <CaseStudySection title="The Challenge">
        <CaseStudyText>
          Audio classification presents several challenges: limited labeled data
          for specific tasks, the common assumption that transfer learning is
          always superior, and uncertainty about whether pre-trained models
          (trained on large datasets like AudioSet) generalize well to all audio
          tasks. I wanted to understand the tradeoffs between custom models and
          transfer learning.
        </CaseStudyText>
        <CaseStudyText>
          My goal was to compare multiple approaches to audio classification and
          determine which works best for a focused three-class animal sound
          classification task. I systematically tested five different
          architectures to understand when transfer learning helps and when it
          doesn't.
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="My Approach">
        <Typography variant="h3" className="mb-3">
          Dataset & Preprocessing
        </Typography>
        <CaseStudyText>
          I used the{" "}
          <a
            href="https://www.kaggle.com/datasets/chiragchhaya/human-words-audio-classification"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary hover:underline"
          >
            Human Words Audio Classification
          </a>{" "}
          dataset from Kaggle, which contains 610 audio clips (dog, cat, bird)
          of 1-second duration at 16 kHz. I converted audio to Mel-spectrograms
          (128×128 resolution) using librosa, normalized using min-max scaling,
          and reshaped to (128, 128, 1) for CNN input. This transformation
          converts 1-second audio clips into 2D image-like representations that
          CNNs can process effectively.
        </CaseStudyText>

        <CaseStudyImage
          src="/images/case-studies/audio-classification/1_mel_spectrograms.png"
          alt="Mel-spectrograms for dog, cat, and bird sounds showing distinct patterns"
          caption="Mel-spectrograms for each class (dog, cat, bird) showing distinct frequency patterns. This visual representation demonstrates why converting audio to spectrograms enables CNNs to learn class-specific features effectively."
        />

        <CaseStudyText>
          I used stratified splits to maintain class distribution: 440 train /
          78 validation / 92 test. This ensured each split had balanced
          representation of all three classes.
        </CaseStudyText>

        <Typography variant="h3" className="mb-4 text-xl">
          Architectures Explored
        </Typography>
        <CaseStudyText>
          I designed a rigorous experimental methodology: start with a simple
          baseline, systematically add complexity, and compare against transfer
          learning. I tested five architectures using the same dataset and
          evaluation methodology to ensure fair comparison.
        </CaseStudyText>

        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50">
            <Typography variant="h4" className="mb-2 text-lg font-semibold">
              1. Baseline CNN (90% test accuracy)
            </Typography>
            <p className="text-sm text-text-muted mb-3 font-mono">
              Conv2D(32, 3×3) → MaxPool(2×2) → Conv2D(64, 3×3) → MaxPool(2×2) →
              Flatten → Dense(64, ReLU) → Dense(3, softmax)
            </p>
            <CaseStudyText className="text-sm">
              Simple two-layer CNN as a baseline. Fast training, straightforward
              architecture. Achieved 90% test accuracy with 0.57 test loss.
            </CaseStudyText>
          </div>

          <div className="p-6 rounded-xl bg-accent-primary/5 border border-accent-primary/20">
            <Typography variant="h4" className="mb-2 text-lg font-semibold">
              2. CNN + Dropout (92% test accuracy) ⭐ Best Model
            </Typography>
            <p className="text-sm text-text-muted mb-3 font-mono">
              Conv2D(32) → MaxPool → Conv2D(64) → MaxPool → Conv2D(128) →
              MaxPool → Flatten → Dense(128, ReLU) → Dropout(0.5) → Dense(3,
              softmax)
            </p>
            <CaseStudyText className="text-sm mb-3">
              Added a third convolutional layer and Dropout(0.5) regularization.
              This achieved <strong>92% test accuracy</strong> with{" "}
              <strong>0.24 test loss</strong> (vs 0.57 baseline). Precision,
              Recall, and F1-Score all at ~92% (macro-averaged). Better
              calibration and balanced performance across all three classes.
            </CaseStudyText>
            <Typography variant="body" color="muted" className="text-xs italic">
              Key insight: Regularization significantly improved generalization
              without increasing model complexity.
            </Typography>

            <div className="mt-4 space-y-4">
              <CaseStudyImage
                src="/images/case-studies/audio-classification/6_training_curves.png"
                alt="Training and validation curves showing model convergence"
                caption="Training curves showing stable learning with no severe overfitting. The model converges smoothly, demonstrating proper regularization."
              />
              <CaseStudyImage
                src="/images/case-studies/audio-classification/4_cnn_confusion_matrix.png"
                alt="CNN confusion matrix showing per-class performance"
                caption="Confusion matrix for the best model (CNN + Dropout) showing balanced performance across all three classes. 92% accuracy with minimal confusion between classes."
              />
            </div>
          </div>

          {[
            {
              title: "3. CRNN - CNN + Bidirectional GRU (78.69% val accuracy)",
              arch: "Conv2D layers → BatchNorm → MaxPool → GlobalAveragePooling2D → Bidirectional GRU(128) → Dropout(0.3) → Dense(3, softmax)",
              desc: "Combined CNN feature extraction with temporal modeling using Bidirectional GRU. Achieved 78.69% validation accuracy. Shows temporal modeling is viable, but more complex architecture didn't beat simpler CNN+Dropout.",
            },
            {
              title: "4. Vision Transformer (ViT) (35-40% val accuracy)",
              arch: "PatchLayer (16×16) → PatchEmbedding → Transformer encoder blocks → GlobalAveragePooling1D → Dense(3, softmax)",
              desc: "Implemented Vision Transformer with patch-based attention. Achieved only 35-40% validation accuracy (near random guessing). Loss: 1.09-1.12. Severely underfits; transformers need much more data than we had (610 clips).",
            },
            {
              title: "5. Transfer Learning - YAMNet (66% test accuracy)",
              arch: "YAMNet (pre-trained on AudioSet) → Extract 1024-D embeddings → Average/Flatten → Dense classifier head",
              desc: "Tested two approaches: (1) Averaged embeddings (62% accuracy) and (2) Full sequence embeddings (66% accuracy). Both significantly underperformed our task-specific CNN.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-bg-surface/50 border border-border-primary/50"
            >
              <Typography variant="h4" className="mb-2 text-lg font-semibold">
                {item.title}
              </Typography>
              <p className="text-sm text-text-muted mb-3 font-mono">
                {item.arch}
              </p>
              <CaseStudyText className="text-sm">{item.desc}</CaseStudyText>
            </div>
          ))}

          <CaseStudyImage
            src="/images/case-studies/audio-classification/7_architecture_diagram.png"
            alt="Visual architecture diagram of the CNN + Dropout model"
            caption="Architecture diagram of the winning model (CNN + Dropout). The simplicity of this design (three convolutional layers with dropout regularization) proved more effective than complex architectures."
          />
        </div>
      </CaseStudySection>

      <CaseStudySection title="Results Comparison">
        <CaseStudyText>
          Here's a comprehensive comparison of all five architectures I tested,
          showing that the simple CNN + Dropout outperformed more complex
          approaches:
        </CaseStudyText>

        <CaseStudyImage
          src="/images/case-studies/audio-classification/3_comparison_table.png"
          alt="Quick visual summary of model comparison"
          caption="Quick visual summary above. Detailed comparison table below."
        />

        <Typography variant="h3" className="mb-3 text-lg">
          Detailed Comparison
        </Typography>
        <div className="overflow-x-auto mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left p-4 font-semibold text-text-primary">
                  Model
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  Test/Val Accuracy
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  Precision
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  Recall
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  F1-Score
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  Loss
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-accent-primary/5 border-b border-border-primary/50">
                <td className="p-4 font-medium text-text-primary">
                  <strong>CNN + Dropout</strong>
                </td>
                <td className="p-4 text-text-secondary">
                  <strong>92%</strong> (test)
                </td>
                <td className="p-4 text-text-secondary">
                  <strong>92%</strong>
                </td>
                <td className="p-4 text-text-secondary">
                  <strong>92%</strong>
                </td>
                <td className="p-4 text-text-secondary">
                  <strong>92%</strong>
                </td>
                <td className="p-4 text-text-secondary">
                  <strong>0.24</strong>
                </td>
                <td className="p-4 text-text-secondary">
                  <strong>Best model</strong>
                </td>
              </tr>
              {[
                {
                  name: "Baseline CNN",
                  acc: "90% (test)",
                  p: "90%",
                  r: "90%",
                  f1: "90%",
                  loss: "0.57",
                  notes: "Good baseline",
                },
                {
                  name: "CRNN",
                  acc: "78.69% (val)",
                  p: "N/A",
                  r: "N/A",
                  f1: "N/A",
                  loss: "0.80",
                  notes: "Temporal modeling",
                },
                {
                  name: "YAMNet (sequence)",
                  acc: "66% (test)",
                  p: "60%",
                  r: "58%",
                  f1: "58%",
                  loss: "0.96",
                  notes: "Transfer learning",
                },
                {
                  name: "YAMNet (averaged)",
                  acc: "62% (test)",
                  p: "N/A",
                  r: "N/A",
                  f1: "N/A",
                  loss: "0.90",
                  notes: "Transfer learning",
                },
                {
                  name: "ViT",
                  acc: "35-40% (val)",
                  p: "N/A",
                  r: "N/A",
                  f1: "N/A",
                  loss: "1.10",
                  notes: "Underfits",
                },
              ].map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-border-primary/50"
                >
                  <td className="p-4 font-medium text-text-primary">
                    {row.name}
                  </td>
                  <td className="p-4 text-text-secondary">{row.acc}</td>
                  <td className="p-4 text-text-secondary">{row.p}</td>
                  <td className="p-4 text-text-secondary">{row.r}</td>
                  <td className="p-4 text-text-secondary">{row.f1}</td>
                  <td className="p-4 text-text-secondary">{row.loss}</td>
                  <td className="p-4 text-text-secondary">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Key Research Finding">
        <CaseStudyImage
          src="/images/case-studies/audio-classification/8_key_finding.png"
          alt="Bar chart comparing CNN (92%) vs YAMNet (66%) accuracy"
          caption="Visual comparison showing the 26% accuracy gap between task-specific CNN (92%) and transfer learning with YAMNet (66%)."
        />

        <div className="p-6 rounded-xl bg-accent-primary/5 border border-accent-primary/20 mb-6">
          <Typography variant="h3" className="mb-4 text-xl">
            Transfer Learning Is Not Always Better
          </Typography>
          <CaseStudyText>
            My experiment showed that a task-specific CNN (92% accuracy)
            significantly outperformed transfer learning with YAMNet (66%
            accuracy), a <strong>26% improvement</strong>. This challenges the
            common assumption that transfer learning is always superior.
          </CaseStudyText>

          <div className="space-y-3 mt-4">
            <div>
              <Typography variant="h4" className="mb-2 text-base font-semibold">
                Why Transfer Learning Underperformed:
              </Typography>
              <ul className="list-disc list-inside space-y-1 text-sm text-text-muted">
                <li>
                  YAMNet trained on AudioSet (general audio events like "car
                  horn") but our task is focused (dog/cat/bird).
                </li>
                <li>Domain mismatch between pre-training and target task.</li>
                <li>
                  Small dataset size (610 clips) makes task-specific training
                  viable.
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-4 border-t border-border-primary/50">
              <Typography variant="h4" className="mb-2 text-base font-semibold">
                When Transfer Learning Works:
              </Typography>
              <ul className="list-disc list-inside space-y-1 text-sm text-text-muted">
                <li>Very limited labeled data.</li>
                <li>Task similar to pre-training domain.</li>
                <li>Need quick baseline without compute for training.</li>
              </ul>
            </div>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Technical Implementation">
        <Typography variant="h3" className="mb-3 text-xl">
          Data Pipeline
        </Typography>
        <CaseStudyText>
          I used librosa for audio processing: load audio at 16 kHz, compute
          Mel-spectrograms (n_fft=1024, hop_length=512, n_mels=128), convert to
          dB scale, normalize to [0, 1], and reshape to (128, 128, 1) for CNN
          input.
        </CaseStudyText>

        <Typography variant="h3" className="mb-3 text-xl">
          Training Configuration
        </Typography>
        <CaseStudyText>
          All models used Adam optimizer, categorical crossentropy loss, and
          comprehensive metrics. I implemented early stopping (patience=10),
          model checkpointing, and learning rate scheduling.
        </CaseStudyText>

        <Typography variant="h3" className="mb-3 text-xl">
          Evaluation Methodology
        </Typography>
        <CaseStudyText>
          I used stratified splits to maintain class distribution, kept a
          separate test set never seen during training, computed comprehensive
          metrics, generated confusion matrices, and ran multiple random seeds
          to verify consistency.
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="What I Learned">
        <div className="space-y-6">
          {[
            {
              title: "1. Transfer Learning Isn't Automatic",
              text: "The biggest takeaway: transfer learning isn't always the best approach. Domain alignment matters more than model size. Task-specific models can outperform large pre-trained models when there's a domain mismatch.",
            },
            {
              title: "2. Regularization Is Critical",
              text: "Dropout(0.5) significantly improved results: reduced test loss from 0.57 → 0.24, maintained high accuracy (92%), and improved model calibration.",
            },
            {
              title: "3. Complexity ≠ Performance",
              text: "Simpler CNN outperformed complex architectures: CRNN with GRU achieved 78.69%, Vision Transformer achieved 35-40%, but simple CNN + Dropout achieved 92%. Model complexity should match the problem complexity and dataset size.",
            },
          ].map((item) => (
            <div key={item.title}>
              <Typography variant="h3" className="mb-2 text-lg">
                {item.title}
              </Typography>
              <CaseStudyText>{item.text}</CaseStudyText>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="Tech Stack Breakdown">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="text-left p-4 font-semibold text-text-primary">
                  Category
                </th>
                <th className="text-left p-4 font-semibold text-text-primary">
                  Technologies
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Deep Learning", tech: "TensorFlow, Keras" },
                { category: "Audio Processing", tech: "librosa" },
                {
                  category: "Data Science",
                  tech: "NumPy, pandas, scikit-learn",
                },
                {
                  category: "Transfer Learning",
                  tech: "YAMNet (pre-trained on AudioSet)",
                },
                {
                  category: "Architectures",
                  tech: "CNN, CRNN (CNN + GRU), Vision Transformer",
                },
              ].map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-border-primary/50"
                >
                  <td className="p-4 font-medium text-text-primary">
                    {row.category}
                  </td>
                  <td className="p-4 text-text-secondary">{row.tech}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Repository Highlights">
        <CaseStudyText>
          The repository is well-structured with organized notebooks, complete
          documentation, and reproducible experiments:
        </CaseStudyText>
        <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
          <li>
            <strong>/notebooks/</strong> - 7 exploration notebooks with clear
            progression
          </li>
          <li>
            <strong>/data/</strong> - Organized by class (dog, cat, bird)
          </li>
          <li>
            <strong>/models/</strong> - Saved model weights
          </li>
          <li>
            <strong>FINAL_project_submission.ipynb</strong> - Complete
            consolidated work
          </li>
        </ul>
        <CaseStudyText className="italic">
          205 commits - Iterative development and experimentation
        </CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title="Explore the Project">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 font-semibold text-lg">
              Source Code
            </Typography>
            <p className="text-sm mb-3">
              <a
                href="https://github.com/aabhiyann/audio-classification-cnn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline font-medium"
              >
                GitHub Repository
              </a>
            </p>
            <Typography variant="body" className="text-sm text-text-muted">
              Complete implementation with notebooks, models, and documentation
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 font-semibold text-lg">
              Read Final Report
            </Typography>
            <p className="text-sm mb-2">
              <a
                href="https://github.com/aabhiyann/audio-classification-cnn/blob/main/Audio%20Classification%20CNN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary hover:underline font-medium"
              >
                PDF Report
              </a>
            </p>
            <Typography variant="body" className="text-sm text-text-muted">
              Comprehensive PDF report with all findings and analysis
            </Typography>
          </div>

          <div className="p-6 rounded-2xl bg-bg-surface/30 border border-border-primary/30">
            <Typography variant="h3" className="mb-3 font-semibold text-lg">
              Technical Deep Dive
            </Typography>
            <Typography variant="body" color="muted" className="text-sm mb-3">
              Read my research analysis on why task-specific CNNs outperformed
              transfer learning by 26%
            </Typography>
            <a
              href="/deep-dives/audio-classification-research"
              className="text-accent-primary hover:underline font-medium text-sm inline-flex items-center gap-1"
            >
              Read Deep Dive →
            </a>
          </div>
        </div>
      </CaseStudySection>
    </CaseStudyLayout>
  );
};

export default AudioClassificationCaseStudy;
