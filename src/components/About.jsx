import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">About the Ferrari Blog</h1>
        <img src="https://i.pinimg.com/originals/94/f4/fb/94f4fbc61706cbd6695140a065b0e430.gif" alt="" width={1050} height={500} className='rounded col-span-2  justify-center items-center'/>
        <p className="text-lg mb-8">
          Welcome to the Ferrari Blog, your number one source for all things Ferrari. We're dedicated to giving you the very best of Ferrari-related content, with a focus on the latest news, deep dives into Ferrari's history, and exciting stories from the world of Ferrari.
        </p>
        <p className="text-lg mb-8">
          Founded in 2024, the Ferrari Blog has come a long way from its beginnings. When we first started out, our passion for Ferrari cars drove us to start this blog, and we hope that our passion will ignite the same love for Ferrari in you.
        </p>
        <p className="text-lg mb-8">
          We hope you enjoy our blog as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-lg mb-8 font-semibold">Sincerely,</p>
        <p className="text-lg font-semibold">The Ferrari Blog Team</p>
      </div>
    </div>
  );
};

export default About;
