'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/posts/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="mt-4">{post.content}</p>
    </div>
  );
}