import React from 'react'
import Navbar from '../components/Navbar'
import profilepic from '../assets/images/profile.jpg'

function About() {
  return (
    <>
      <Navbar />
      <div className="m-4 grid gap-4 sm:grid-cols-2 items-center">
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-2">About Me</h2>
    <p className="text-gray-700 leading-relaxed">
      Tempor commodo reprehenderit commodo aliquip sint duis non duis aliqua esse exercitation voluptate. Amet ad deserunt consectetur veniam tempor mollit est culpa non ad proident. Esse labore et excepteur dolore excepteur exercitation proident minim consequat eiusmod duis. Eu deserunt mollit cillum excepteur. Ad labore ea dolore sunt cillum Lorem amet dolore.
    </p>
  </div>
  <div className="flex justify-center p-4">
    <img
      src={profilepic}
      alt="Profile"
      className="w-full h-auto max-w-xs rounded-lg shadow-lg"
    />
  </div>
</div>
</>
  )
}

export default About