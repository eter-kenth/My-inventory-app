import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  const [user, setUser] = useState(null); // Estado para guardar el nombre del usuario

  const handleLogin = (e) => {
    e.preventDefault();
    const userName = e.target.elements.username.value;
    if (userName) {
      setUser(userName); // Establece el nombre del usuario
    }
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-200px)] bg-yellow-100">
        {user ? (
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-gray-800">Welcome, {user}!</h1>
            <p className="text-lg text-gray-600 mt-4">
              Enjoy managing your inventory efficiently.
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h2>
            <form onSubmit={handleLogin}>
              <input 
                type="text" 
                name="username" 
                placeholder="Enter your name" 
                className="w-full p-3 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required 
              />
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
