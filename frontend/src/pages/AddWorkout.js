import React from 'react';
import AddWorkoutForm from './AddWorkoutForm'; 

const AddWorkout = () => {
    console.log('Addworkout component rendered');

    const handleAddWorkout = async (workout) => {
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, 
            },
            body: JSON.stringify(workout),
        });

        if (response.ok) {
            console.log('Workout added successfully');
        } else {
            console.error('Failed to add workout');
        }
    };

    return (
        <div>
            <h1>Add a New Workout</h1>
            <AddWorkoutForm onAddWorkout={handleAddWorkout} />
        </div>
    );
};

export default AddWorkout;