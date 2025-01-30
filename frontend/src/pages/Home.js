// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import AddWorkoutForm from './AddWorkoutForm';
import WorkoutList from './WorkoutList';

const Home = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await response.json();
            setWorkouts(data);
        };
        fetchWorkouts();
    }, []);

    const handleAddWorkout = async (newWorkout) => {
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(newWorkout),
        });
        const addedWorkout = await response.json();
        setWorkouts((prev) => [...prev, addedWorkout]);
    };

    const handleDeleteWorkout = async (id) => {
        await fetch(`/api/workouts/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    };

    return (
        <div>
            <AddWorkoutForm onAddWorkout={handleAddWorkout} />
            <WorkoutList workouts={workouts} onDelete={handleDeleteWorkout} />
        </div>
    );
};

export default Home;