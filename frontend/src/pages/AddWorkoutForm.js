import React, { useState } from 'react';

const AddWorkoutForm = ({ onAddWorkout }) => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddWorkout({ title, load, reps });
        setTitle('');
        setLoad('');
        setReps('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <div>
                <label>Exercise Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Load (kg):</label>
                <input
                    type="number"
                    value={load}
                    onChange={(e) => setLoad(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Reps:</label>
                <input
                    type="number"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Workout</button>
        </form>
    );
};

export default AddWorkoutForm;