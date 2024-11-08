import React from 'react';
import ProfilePic from '../assets/images/profile.jpg';

function Slider() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-7 rounded-lg shadow-xl m-5 max-w-8xl mx-auto">
      <div className="flex items-center justify-between space-x-10">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Profile</h1>
          <h2 className="text-xl font-semibold mb-2">Hello, I'm Kavindu!</h2>
          <p className="text-lg leading-relaxed">
            I am an Information Technology and Management undergraduate with a passion for web and mobile development. I'm currently exploring full-stack development, specializing in technologies like React, Flutter, and Laravel. I believe in creating efficient, user-friendly applications.
          </p>
          <p className="mt-4 text-lg">
            I'm excited to share my journey and projects with you. Feel free to reach out for collaborations or just to connect!
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={ProfilePic}
            alt="Profile Avatar"
            className="w-60 h-60 rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
