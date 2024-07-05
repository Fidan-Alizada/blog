import create from 'zustand';

const usePostStore = create((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
  deletePost: (index) => set((state) => ({
    posts: state.posts.filter((_, i) => i !== index),
  })),
}));

export default usePostStore;
