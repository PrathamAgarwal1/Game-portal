// App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import Home from './pages/home/Home';
import AdminQuiz from './pages/quiz/AdminQuiz';
import QuizPlay from './pages/quiz/QuizPlay';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={loggedInUser} />} />
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/quiz" element={<AdminQuiz />} />
        <Route path="/quiz/play" element={<QuizPlay />} />
      </Routes>
    </Router>
  );
}

export default App;
