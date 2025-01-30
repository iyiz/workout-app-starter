const mongoose = require('mongoose');

// Define the workout schema
const workoutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
  userId: { // New field to associate the workout with a user
    type: mongoose.Schema.Types.ObjectId, // Reference to the User model
    ref: 'User', // Name of the User model
    required: true // Ensure this field is always present
  }
}, { timestamps: true });

// Check if the model already exists to prevent overwriting
const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);

module.exports = Workout;