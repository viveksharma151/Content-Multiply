const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoMemoryServer } = require('mongodb-memory-server');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/generations', require('./routes/generationRoutes'));

// Database connection
const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;
    
    // If the URI is localhost but MongoDB isn't installed, use an in-memory database
    if (!mongoUri || mongoUri.includes('localhost')) {
      console.log('Starting local in-memory MongoDB for easy testing...');
      const mongoServer = await MongoMemoryServer.create();
      mongoUri = mongoServer.getUri();
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

connectDB();
