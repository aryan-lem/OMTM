// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import TeacherHome from './TeacherHome'; // Create TeacherHome component
import StudentHome from './StudentHome'; // Create StudentHome component

const App = () => {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role);
  };

  const PrivateTeacherRoute = ({ element }) => {
    return userRole === 'teacher' ? element : <Navigate to="/login" />;
  };

  const PrivateStudentRoute = ({ element }) => {
    return userRole === 'student' ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div>
        <nav>
          {/* ... (navigation links) */}
          {/* <Link to="./teacher-home"/> */}
        </nav>

        <hr />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/TeacherHome"
            element={<PrivateTeacherRoute element={<TeacherHome />} />}
          />
          <Route
            path="/StudentHome"
            element={<PrivateStudentRoute element={<StudentHome />} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
