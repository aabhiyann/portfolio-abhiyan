# Audio Classification Research: When Task-Specific Models Beat Transfer Learning

**TL;DR:** I systematically compared 5 deep learning architectures for audio classification. The result? A simple task-specific CNN achieved 92% accuracy, outperforming YAMNet transfer learning by 26%. Here's what I learned about when transfer learning works—and when it doesn't.

💻 **Source:** [github.com/aabhiyann/audio-classification-cnn](https://github.com/aabhiyann/audio-classification-cnn)

---

## The Research Question

**Can task-specific CNNs trained from scratch outperform transfer learning for audio classification?**

This was my research project for Neural Networks & Deep Learning at GWU. I wanted to challenge the common assumption that transfer learning is always superior—especially when you have sufficient labeled data and a focused task.

## The Challenge

Audio classification presents several challenges:
- Limited labeled data for specific tasks
- The common assumption that transfer learning is always better
- Uncertainty about whether pre-trained models (trained on large datasets like AudioSet) generalize well to all audio tasks

I wanted to understand the tradeoffs between custom models and transfer learning on a focused three-class animal sound classification task (dog, cat, bird).

## My Approach

I designed a rigorous experimental methodology: start with a simple baseline, systematically add complexity, and compare against transfer learning. I tested five architectures using the same dataset and evaluation methodology:

1. **Baseline CNN** (90% test accuracy)
2. **CNN + Dropout** (92% test accuracy) ⭐ **Best Model**
3. **CRNN** - CNN + Bidirectional GRU (78.69% val accuracy)
4. **Vision Transformer** (35-40% val accuracy)
5. **Transfer Learning - YAMNet** (66% test accuracy)

### Dataset & Preprocessing

I used the Human Words Audio Classification dataset from Kaggle: 610 audio clips (dog, cat, bird) of 1-second duration at 16 kHz. I converted audio to Mel-spectrograms (128×128 resolution) using librosa, normalized using min-max scaling, and reshaped to (128, 128, 1) for CNN input. This transforms 1-second audio clips into 2D image-like representations that CNNs can process effectively.

Stratified splits: 440 train / 78 validation / 92 test.

## Key Finding: Transfer Learning Is Not Always Better

**The Result:**
- Task-specific CNN: **92% accuracy**
- Transfer learning (YAMNet): **66% accuracy**
- **Gap: 26%** in favor of training from scratch

This challenges the common assumption that transfer learning is always superior.

### Why Transfer Learning Underperformed

1. **Domain Mismatch:** YAMNet was trained on AudioSet (general audio events like "car horn," "dog bark," "footsteps"), but our task is focused (dog/cat/bird classification)
2. **Sufficient Data:** With 610 clips, task-specific training was viable
3. **Task Specificity:** The focused nature of the task favored custom training

### When Transfer Learning Works

- Very limited labeled data
- Task similar to pre-training domain
- Need quick baseline without compute for training

### When Training From Scratch Works

- Sufficient labeled data (our case: 610 clips)
- Focused, specific task
- Domain mismatch with available pre-trained models

## What I Learned

### 1. Transfer Learning Isn't Automatic

The biggest takeaway: **transfer learning isn't always the best approach.** Domain alignment matters more than model size. Task-specific models can outperform large pre-trained models when there's a domain mismatch. Small, focused datasets can favor custom training over transfer learning.

### 2. Regularization Is Critical

Dropout(0.5) significantly improved results:
- Reduced test loss from 0.57 → 0.24
- Maintained high accuracy (92%)
- Improved model calibration

This showed that proper regularization can make a substantial difference even with relatively simple architectures.

### 3. Complexity ≠ Performance

Simpler CNN outperformed complex architectures:
- CRNN with GRU: 78.69%
- Vision Transformer: 35-40%
- **Simple CNN + Dropout: 92%**

This reinforced that model complexity should match the problem complexity and dataset size.

### 4. Research Process

Conducting systematic experiments taught me the importance of:
- Proper train/val/test splits
- Comprehensive metrics beyond accuracy
- Comparing multiple approaches rigorously
- Documenting findings clearly

This project gave me hands-on experience with the experimental methodology that's essential for ML research.

## Results Summary

| Model | Test/Val Accuracy | Loss | Notes |
|-------|-------------------|------|-------|
| **CNN + Dropout** | **92%** (test) | **0.24** | **Best model** |
| Baseline CNN | 90% (test) | 0.57 | Good baseline |
| CRNN | 78.69% (val) | 0.80 | Temporal modeling |
| YAMNet (sequence) | 66% (test) | 0.96 | Transfer learning |
| YAMNet (averaged) | 62% (test) | 0.90 | Transfer learning |
| ViT | 35-40% (val) | 1.10 | Underfits |

*All metrics macro-averaged across three classes (dog, cat, bird)*

## Why This Matters

This research demonstrates:
- **Critical thinking** - Challenging common ML assumptions
- **Systematic experimentation** - Testing multiple approaches rigorously
- **Proper evaluation** - Comprehensive metrics, proper splits, confusion matrices
- **Clear communication** - Well-documented findings

For recruiters, this shows:
- Research mindset and methodology
- Understanding of when to use different approaches
- Ability to analyze failures, not just successes
- Clear documentation and communication

---

**What's your experience with transfer learning? Have you found cases where training from scratch outperformed pre-trained models? I'd love to hear your thoughts in the comments.**

#MachineLearning #DeepLearning #TransferLearning #CNN #AudioClassification #Research #NeuralNetworks

