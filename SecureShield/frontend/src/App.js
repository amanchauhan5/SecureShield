import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Policies from './pages/Policies';
import Home from './pages/Home';
import NavigationBar from './components/Navbar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import SignUpForm from './components/UserLayout/SignUpForm';
import './styles/App.css';
import LoginForm from './components/UserLayout/LoginForm';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar user={user} onLogout={handleLogout} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
            <Route
              path="/policies"
              element={
                <ProtectedRoute user={user}>
                  <Policies />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
