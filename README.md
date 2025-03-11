Full Stack Blog Application Documentation

🚀 Overview

This document provides a complete overview of the Full Stack Blog Application built using Next.js 14 (Frontend) and NestJS (Backend). The application allows users to log in using Google/Facebook OAuth, create posts, view posts, and manage authentication.

📂 Folder Structure

✅ Backend (NestJS)


✅ Frontend (Next.js 14 + Tailwind CSS)



✅ Environment Variables

📄 Backend (.env)

MONGO_URI=mongodb://localhost:27017/blog-app
JWT_SECRET=secretKey
PORT=3000

GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

FACEBOOK_CLIENT_ID=<your-facebook-client-id>
FACEBOOK_CLIENT_SECRET=<your-facebook-client-secret>
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback

📄 Frontend (.env.local)

NEXT_PUBLIC_BACKEND_URL=http://localhost:3000

✅ Backend Setup

📜 Install Dependencies

cd backend
npm install

📜 Run Backend

npm run start:dev

📜 Access API Endpoints

Endpoint

Method

Description

/auth/google

GET

Login with Google

/auth/facebook

GET

Login with Facebook

/posts

GET

Get all posts

/posts/:id

GET

Get post by ID

/posts

POST

Create post

✅ Frontend Setup

📜 Install Dependencies

cd frontend
npm install

📜 Run Frontend

npm run dev

📜 Access Frontend

http://localhost:3001

✅ Test Cases

Backend Test Cases (Jest)

Module

Test Case

Description

Auth

Should login with Google

Tests Google Login API

Auth

Should login with Facebook

Tests Facebook Login API

Posts

Should create post

Tests creating a post

Posts

Should fetch all posts

Tests fetching posts

Run test cases for backend:

npm run test

Frontend Test Cases (Jest)

Coming Soon (if required)

✅ MongoDB Collections

📁 posts Collection

{
  "_id": "ObjectId",
  "title": "string",
  "content": "string",
  "author": "string",
  "createdAt": "Date"
}

📁 users Collection

{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "provider": "string",
  "accessToken": "string"
}



