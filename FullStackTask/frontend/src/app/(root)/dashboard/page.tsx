'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {posts.map(post => (
        <div key={post.id} className="border p-4 rounded mb-2 bg-white">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}