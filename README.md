This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Dragon News

**Dragon News** is a modern news portal application built with Next.js, where users can browse the latest news articles by category, read detailed news content, and stay updated through an intuitive and responsive interface. The platform includes authentication, protected routes, dynamic news pages, and category-based filtering for a seamless news-reading experience.

---

## Live Site Link

- https://dragon-news-nextjs-steel.vercel.app/

---

## Users Can

- Browse news articles by category
- Read detailed news content
- Create an account and log in securely
- Access protected news pages
- Explore breaking news updates
- Navigate through a responsive and user-friendly interface

The project focuses on modern UI design, smooth user experience, and scalable application architecture.

---

## Features

### Authentication System

- User registration and login functionality
- Secure authentication using Better Auth
- Session management and protected routes
- Persistent user authentication experience

### News Categories

- Browse news based on categories
- Dynamic category pages
- Fast and organized content discovery
- Easy navigation between categories

### News Details Page

- View complete news articles
- Dynamic routing for individual news content
- Clean and readable article layout
- Better reading experience for users

### Breaking News Section

- Highlights important and trending news
- Marquee-based breaking news display
- Quick access to featured updates

### User Experience

- Loading states for dynamic pages
- Custom 404 page handling
- Toast notifications for user actions
- Smooth navigation throughout the application

### Modern UI/UX

- Clean design using Tailwind CSS and DaisyUI
- Reusable component architecture
- Consistent layout and styling across pages

---

## Tech Stack

- Next.js (App Router) – Frontend framework for routing, SSR, and application architecture
- React.js – Component-based UI library
- Tailwind CSS – Utility-first CSS framework
- DaisyUI – Prebuilt UI component library
- Better Auth – Authentication and session management
- MongoDB – User authentication and database storage
- React Hook Form – Form handling and validation
- React Toastify – Notification system
- React Fast Marquee – Breaking news scrolling component
- Date-fns – Date formatting utilities
- React Icons – Icon library for UI enhancement

---

## Project Structure

```bash
src/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.jsx
│   │
│   ├── (main)/
│   │   ├── about/
│   │   ├── career/
│   │   ├── category/
│   │   │   └── [id]/
│   │   ├── news/
│   │   │   └── [id]/
│   │   ├── page.js
│   │   └── layout.jsx
│   │
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │
│   ├── globals.css
│   ├── layout.js
│   ├── loading.jsx
│   └── not-found.jsx
│
├── assets/
│
├── components/
│   ├── homepage/
│   │   └── news/
│   └── shared/
│
├── lib/
│   ├── auth.js
│   ├── auth-client.js
│   └── data.js
│
└── proxy.js
```

---

## Installation & Setup

Clone the repository:

```bash
git clone https://github.com/afia-labonno/dragon-news-nextjs.git

cd dragon-news-nextjs

npm install
```

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_connection_string

BETTER_AUTH_SECRET=your_secret_key

BETTER_AUTH_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```
---
