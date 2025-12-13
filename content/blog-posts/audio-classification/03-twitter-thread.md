# Twitter/X Thread (12-15 tweets)

---

**Tweet 1 (Hook):**
I just finished a research project that challenged a common assumption in deep learning.

Task-specific CNN: 92% accuracy
Transfer learning: 66% accuracy

Here's what I learned 🧵

💻 github.com/aabhiyann/audio-classification-cnn

---

**Tweet 2:**
The Research Question:

Can task-specific CNNs trained from scratch outperform transfer learning for audio classification?

I tested 5 architectures on a three-class animal sound task (dog, cat, bird).

---

**Tweet 3:**
The Results:

1. CNN + Dropout: 92% accuracy ⭐
2. Baseline CNN: 90%
3. CRNN (CNN + GRU): 78.69%
4. YAMNet (transfer): 66%
5. Vision Transformer: 35-40%

Simple CNN beat transfer learning by 26%.

---

**Tweet 4:**
Why Transfer Learning Underperformed:

1. Domain mismatch
   - YAMNet trained on AudioSet (general audio)
   - Our task: focused (dog/cat/bird)

2. Sufficient data
   - 610 clips made task-specific training viable

3. Task specificity
   - Focused tasks favor custom training

---

**Tweet 5:**
The Key Finding:

Transfer learning isn't always better.

When you have:
✅ Sufficient labeled data
✅ Focused, specific task
✅ Domain mismatch with pre-trained models

Training from scratch can significantly outperform transfer learning.

---

**Tweet 6:**
What I Learned #1: Regularization Is Critical

Dropout(0.5) reduced test loss from 0.57 → 0.24 while maintaining 92% accuracy.

Proper regularization makes a huge difference, even with simple architectures.

---

**Tweet 7:**
What I Learned #2: Complexity ≠ Performance

Simple CNN + Dropout (92%) outperformed:
- CRNN with GRU (78.69%)
- Vision Transformer (35-40%)

Model complexity should match problem complexity and dataset size.

---

**Tweet 8:**
What I Learned #3: Transfer Learning Isn't Automatic

Domain alignment matters more than model size.

When there's a mismatch, task-specific models can win—even against large pre-trained models.

---

**Tweet 9:**
The Dataset:

610 audio clips (dog, cat, bird)
1-second duration at 16 kHz
Converted to Mel-spectrograms (128×128)
Stratified splits: 440 train / 78 val / 92 test

---

**Tweet 10:**
The Methodology:

I tested 5 architectures using the same dataset and evaluation:
- Baseline CNN
- CNN + Dropout
- CRNN (CNN + Bidirectional GRU)
- Vision Transformer
- YAMNet transfer learning

All with proper train/val/test splits and comprehensive metrics.

---

**Tweet 11:**
When Transfer Learning Works:

✅ Very limited labeled data
✅ Task similar to pre-training domain
✅ Need quick baseline without compute

When Training From Scratch Works:

✅ Sufficient labeled data
✅ Focused, specific task
✅ Domain mismatch with pre-trained models

---

**Tweet 12:**
The Takeaway:

Transfer learning is powerful, but it's not always the answer.

Sometimes the simple, task-specific approach wins—even against large pre-trained models.

---

**Tweet 13:**
This was a research project for my Neural Networks & Deep Learning course at GWU.

I wanted to challenge the assumption that transfer learning is always superior.

The results speak for themselves: 26% improvement with task-specific training.

---

**Tweet 14:**
What's your experience with transfer learning?

Have you found cases where custom training beat pre-trained models?

Drop your thoughts below 👇

Source: github.com/aabhiyann/audio-classification-cnn

And if you found this helpful, RT the first tweet!

---

**Hashtags to include in Tweet 1:**
#MachineLearning #DeepLearning #TransferLearning #CNN #Research

---

**Pro Tips:**
1. Add a screenshot of the training curves or confusion matrix to Tweet 1
2. Post during peak hours (9-11 AM or 1-3 PM EST on weekdays)
3. Engage with replies quickly (first hour is critical)
4. Consider adding a demo GIF showing the mel-spectrograms

