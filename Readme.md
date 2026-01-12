# 🎬 Movie Ticket Booking App - CineBook (MERN Stack)

A full-stack **Movie Ticket Booking Web Application** built using the **MERN stack**, focused on real-world booking logic, clean architecture, and modern UI/UX.
Users can browse movies, view details, select seats, and manage bookings, while admins manage movies and shows.

> 🚧 **Status:** Frontend setup completed. Backend and advanced features are under active development.

---

## ✨ Features (Implemented So Far)

### Frontend

* ⚡ React + Vite setup
* 🎨 Tailwind CSS for modern, responsive UI
* 🧭 Client-side routing using React Router DOM
* 🔔 Toast notifications using React Hot Toast
* 📱 Fully responsive Navbar
* 🧱 Modular component structure
* 📄 Pages:

  * Home
  * Movies Listing
  * Movie Details
  * Seat Layout
  * My Bookings
  * Favorites

### Authentication

* 🔐 Clerk authentication integrated (frontend)

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router DOM
* React Hot Toast
* Clerk Authentication

### Backend *(Upcoming)*

* Node.js
* Express.js
* MongoDB
* JWT Authentication

---

## 📁 Project Structure

```
MOVIETICKETBOOKINGAPP/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── MovieDetails.jsx
│   │   │   ├── SeatLayout.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   └── Favorite.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

Make sure you have installed:

* Node.js (v18+ recommended)
* npm or yarn

---

### 🔧 Frontend Setup

```bash
# Clone the repository
git clone https://github.com/your-username/movie-ticket-booking-app.git

# Navigate to client folder
cd movie-ticket-booking-app/client

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `client` folder:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> ⚠️ Do not commit `.env` files to GitHub.

---

## 📌 Development Approach

* Clean folder structure
* Reusable components
* Scalable architecture
* Incremental feature-based commits
* Production-ready coding practices

---

## 🌐 Live Demo

🚧 Coming soon

---

## 👨‍💻 Author

**Suraj Kumar**
Aspiring Full Stack Developer (MERN)

* GitHub: https://github.com/surajkr20

---

## ⭐️ If you like this project

Give it a ⭐ on GitHub — it motivates me to build more!

---
