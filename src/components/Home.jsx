import React from 'react';
import { Link } from 'react-router-dom';
import usePostStore from '../store/postStore';

const Home = () => {
  const posts = usePostStore((state) => state.posts);
  const deletePost = usePostStore((state) => state.deletePost);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Ferrari Blog</h1>
            <p className="text-lg mb-8">Explore the latest articles, news, and stories about Ferrari.</p>
            <Link to="/create-post" className="px-4 py-2 bg-red-500 text-white rounded">Create New Post</Link>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://i.pinimg.com/originals/4c/ab/f1/4cabf11ca2754891d4d9d20326eca835.png"
              alt="Ferrari"
              width={150}
              height={500}
            />
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div key={index} className="p-4 bg-white rounded shadow-md">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="mb-2">{post.content}</p>
                  {post.photo && (
                    <div className="flex justify-center mt-2">
                      <img src={post.photo} alt={post.title} className="h-40 w-40 object-cover" />
                    </div>
                  )}
                  <button
                    onClick={() => deletePost(index)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4">No posts yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
