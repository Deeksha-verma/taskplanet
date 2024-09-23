import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-black">
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Task Details</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-user text-red-500"></i>
              <span className="text-red-500 font-bold">3982</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-rupee-sign text-green-500"></i>
              <span className="text-green-500 font-bold">2875.00</span>
            </div>
            <img src="https://placehold.co/40x40" alt="Task Planner Logo" className="w-10 h-10 rounded-full"/>
          </div>
        </div>
        <div className="space-y-6">
          {/* Task Item 1 */}
          <div className="bg-gray-700 text-white rounded-lg p-6 flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:bg-gray-600">
            <img src="https://placehold.co/50x50" alt="Task Icon" className="w-12 h-12"/>
            <div className="flex-1">
              <p className="font-bold text-lg">Monthly leaderboard winner <span role="img" aria-label="trophy">🏆</span></p>
              <p className="text-sm">10 Points</p>
            </div>
          </div>
          {/* Task Item 2 */}
          <div className="bg-gray-700 text-white rounded-lg p-6 flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:bg-gray-600">
            <img src="https://placehold.co/50x50" alt="Task Icon" className="w-12 h-12"/>
            <div className="flex-1">
              <p className="font-bold text-lg">Share With 5 friends!</p>
              <p className="text-sm">10 Points</p>
            </div>
          </div>
          {/* Task Item 3 */}
          <div className="bg-gray-700 text-white rounded-lg p-6 flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:bg-gray-600">
            <img src="https://placehold.co/50x50" alt="Task Icon" className="w-12 h-12"/>
            <div className="flex-1">
              <p className="font-bold text-lg">Earn daily win Big Reward!</p>
              <p className="text-sm">10 Points</p>
            </div>
          </div>
          {/* Task Item 4 */}
          <div className="bg-gray-700 text-white rounded-lg p-6 flex items-center space-x-4 transform transition duration-500 hover:scale-105 hover:bg-gray-600">
            <img src="https://placehold.co/50x50" alt="Task Icon" className="w-12 h-12"/>
            <div className="flex-1">
              <p className="font-bold text-lg">Claim 10 Point Every Hour</p>
              <p className="text-sm">10 Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;