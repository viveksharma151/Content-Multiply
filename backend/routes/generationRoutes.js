const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const Generation = require('../models/Generation');

// Get all generations for a user
router.get('/', protect, async (req, res) => {
  try {
    const generations = await Generation.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(generations);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching generations' });
  }
});

// Create a new generation endpoint
router.post('/', protect, async (req, res) => {
  const { originalUrl, originalText } = req.body;
  if (!originalUrl && !originalText) {
    return res.status(400).json({ message: 'Please provide text or a URL to repurpose.' });
  }

  // Content generation processing
  const twitterDraft = `🔥 Just read an amazing piece about ${originalText?.substring(0, 20) || 'this topic'}! Here are my top 3 takeaways...\n\n1️⃣ It changes everything\n2️⃣ You need to know this\n3️⃣ Don't miss out\n\n#Growth #Tech`;
  const linkedInDraft = `I was recently reflecting on the importance of staying ahead in our industry. 💡\n\nAfter reading some recent materials, it struck me how crucial adapting to new paradigms is. The key takeaway? We must constantly evolve.\n\nWhat are your thoughts on this? Let's discuss in the comments below! 👇\n\n#Leadership #Innovation #GrowthMindset`;
  const newsletterDraft = `Subject: The Latest Insights You Can't Miss\n\nHi everyone,\n\nI hope you're having a great week! I recently came across some fascinating information regarding ${originalUrl || 'recent trends'}. \n\nI wanted to share my thoughts with you all, because I believe it will fundamentally shift how we approach our work...\n\nBest,\nYour Name`;

  try {
    const generation = await Generation.create({
      user: req.user.id,
      originalUrl,
      originalText,
      generatedTwitter: twitterDraft,
      generatedLinkedIn: linkedInDraft,
      generatedNewsletter: newsletterDraft
    });

    res.status(201).json(generation);
  } catch (error) {
    res.status(500).json({ message: 'Server error during generation' });
  }
});

module.exports = router;
