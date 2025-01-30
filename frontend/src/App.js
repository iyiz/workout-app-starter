import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import Navbar from './components/Navbar'; 
import AddWorkout from './pages/AddWorkout'; 
import PrivateRoute from './components/PrivateRoute'; 

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/add-workout" element={<AddWorkout />} />
                        <Route 
                            path="/" 
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            } 
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
