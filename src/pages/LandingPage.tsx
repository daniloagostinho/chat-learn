import React from 'react';
import { FaRobot, FaComments, FaMobileAlt } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 text-white font-poppins overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Chat bubble animations */}
          <div className="bubble-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="bubble"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <header className="relative z-10 flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold">ChatLearn</h1>
        <nav className="flex space-x-4">
          <a
            href="/login"
            className="text-lg font-semibold hover:text-indigo-200"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-100 shadow-md"
          >
            Sign Up
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 py-20">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold mb-6">
            Revolutionize Your Learning Experience
          </h2>
          <p className="text-xl mb-8">
            Engage in interactive conversations with our AI-powered chat to enhance your learning journey. Discover a new way to study that's both fun and effective.
          </p>
          <a
            href="/chat"
            className="px-8 py-4 bg-indigo-500 text-white text-lg rounded-full shadow-lg hover:bg-indigo-600"
          >
            Start Chatting Now
          </a>
        </div>
        <div className="mt-12 md:mt-0 md:ml-12">
          <img
            src="/assets/img/chat-illustration.png"
            alt="Chat illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20 bg-white text-gray-800">
        <h3 className="text-4xl font-bold text-center mb-12">
          What Makes ChatLearn Unique?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* AI-Powered Learning */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4 text-indigo-600 text-6xl">
              <FaRobot />
            </div>
            <h4 className="text-2xl font-bold mb-2">AI-Powered Learning</h4>
            <p>
              Leverage cutting-edge AI technology to receive personalized learning assistance anytime, anywhere.
            </p>
          </div>

          {/* Interactive Conversations */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4 text-indigo-600 text-6xl">
              <FaComments />
            </div>
            <h4 className="text-2xl font-bold mb-2">Interactive Conversations</h4>
            <p>
              Engage in meaningful dialogues that adapt to your learning pace and style, making education more engaging.
            </p>
          </div>

          {/* Learn on the Go */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4 text-indigo-600 text-6xl">
              <FaMobileAlt />
            </div>
            <h4 className="text-2xl font-bold mb-2">Learn on the Go</h4>
            <p>
              Our responsive platform ensures you can continue your learning journey seamlessly across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-indigo-700 text-white text-center py-6">
        <p>&copy; 2024 ChatLearn. Created by Danilo Agostinho. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
