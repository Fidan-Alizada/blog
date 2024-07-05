import React, { useState } from 'react';
import usePostStore from '../store/postStore';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState(null);
  const addPost = usePostStore((state) => state.addPost);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content, photo });
    setTitle('');
    setContent('');
    setPhoto(null);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold">Create Post</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Photo</label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {photo && <img src={photo} alt="Preview" className="mt-4 h-40 w-40 object-cover" />}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
