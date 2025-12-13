import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const MelodyHubCaseStudy: React.FC = () => {
  return (
    <CaseStudyLayout
      title="Audio Classification CNN"
      subtitle="Deep Learning model for real-time music genre classification and audio analysis."
      heroImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&h=900&fit=crop&q=80"
      tags={["PyTorch", "React", "Librosa", "Deep Learning"]}
      stats={[
        { label: "Model Accuracy", value: "92%" },
        { label: "Genres", value: "10" },
        { label: "Inference", value: "Real-time" },
        { label: "Dataset", value: "GTZAN" },
      ]}
      links={{
        github: "https://github.com/aabhiyann/audio-cnn",
        live: "https://melodyhub-demo.vercel.app",
      }}
    >
      <section className="mb-12">
        <h2>At a Glance</h2>
        <p>
          This project explores the intersection of signal processing and deep
          learning. I built a Convolutional Neural Network (CNN) capable of
          classifying audio tracks into 10 distinct genres (Jazz, Rock,
          Classical, etc.) with high accuracy, visualizing the results via a
          React frontend.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Problem</h2>
        <p>
          Music recommendation systems often rely on metadata (tags, artist
          name) rather than the actual audio content. I wanted to build a system
          that could "listen" to the raw audio waveform and understand its
          structural patterns to categorize it automatically, a critical
          component for content-based filtering.
        </p>
      </section>

      <section className="mb-12">
        <h2>The Methodology</h2>
        <p>
          The core challenge was converting time-domain audio signals into a
          format suitable for image-based CNN architectures.
        </p>
        <ul>
          <li>
            **Spectrogram generation:** Used `librosa` to convert audio clips
            into Mel-frequency cepstral coefficients (MFCCs).
          </li>
          <li>
            **Data Augmentation:** Applied time-stretching, pitch-shifting, and
            noise injection to the GTZAN dataset to prevent overfitting.
          </li>
          <li>
            **Model Architecture:** Designed a 5-layer 2D CNN with Batch
            Normalization and Dropout layers.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2>Technical Stack</h2>
        <p>
          <strong>Model Training:</strong> PyTorch, Python, Jupyter Notebooks.
          <br />
          <strong>Backend:</strong> FastAPI server serving the ONNX-exported
          model.
          <br />
          <strong>Frontend:</strong> React dashboard visualizing the audio
          waveform and confidence scores for each genre.
        </p>
      </section>

      <section className="mb-12">
        <h2>Key Findings</h2>
        <p>
          The model achieved 92% validation accuracy. Interestingly, it
          struggled distinguishing between 'Rock' and 'Blues' due to similar
          spectral features, which I addressed by increasing the resolution of
          the MFCC inputs.
        </p>
      </section>
    </CaseStudyLayout>
  );
};

export default MelodyHubCaseStudy;
