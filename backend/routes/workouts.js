const express = require('express');
const Workout = require('../models/WorkoutModel'); // Import the Workout model
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController');
const verifyToken = require('../middleware/auth');


const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET a single workout
router.get('/:id', getWorkout);

// POST a new workout
router.post('/', verifyToken, async (req, res) => {
  const workout = new Workout({ ...req.body, userId: req.userId }); // Associate workout with user
  try {
      await workout.save();
      res.status(201).send(workout);
  } catch (error) {
      res.status(400).send({ error: error.message });
  }
});

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;