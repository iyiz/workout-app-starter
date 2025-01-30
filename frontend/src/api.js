// api.js

const API_URL = '/api'; // Adjust this base URL if needed

// Function to get the authorization token
const getAuthToken = () => {
    return localStorage.getItem('token');
};

// Function to fetch all workouts
export const fetchWorkouts = async () => {
    const token = getAuthToken();
    const response = await fetch(`${API_URL}/workouts`, {
        method: 'GET',
        headers: {
            'Authorization': token ? `Bearer ${token}` : '', // Include the token in the header
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch workouts');
    }
    return await response.json();
};

// Function to create a new workout
export const createWorkout = async (workoutData) => {
    const token = getAuthToken();
    const response = await fetch(`${API_URL}/workouts`, {
        method: 'POST',
        headers: {
            'Authorization': token ? `Bearer ${token}` : '',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(workoutData),
    });

    if (!response.ok) {
        throw new Error('Failed to create workout');
    }
    return await response.json();
};

// Add other API functions as needed (updateWorkout, deleteWorkout, etc.)