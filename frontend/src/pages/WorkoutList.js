// src/pages/WorkoutList.js
import React from 'react';

const WorkoutList = ({ workouts, onDelete }) => {
    return (
        <div>
            <h3>Your Workouts</h3>
            <ul>
                {workouts.map((workout) => (
                    <li key={workout.id}>
                        {workout.title} (Load: {workout.load} kg, Reps: {workout.reps})
                        <button onClick={() => onDelete(workout.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkoutList;