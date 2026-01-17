# NexusList | Premium Item Management System

NexusList is a modern, high-performance inventory and item cataloging application. It features a sleek 7-section landing page, a protected administration dashboard for adding new items, and a dynamic catalog explorer powered by a custom Express.js backend.

## 🚀 Live Demo
- **Frontend:** [Your Vercel URL Here]
- **Backend API:** [Your Backend Vercel/Render URL Here]

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **State & Logic:** React Hooks (useState, useEffect)
- **Notifications:** React Hot Toast
- **Authentication:** Cookie-based (using cookies-next)

### Backend
- **Server:** Node.js & Express.js
- **Middleware:** CORS, JSON Parser
- **Deployment:** Vercel Serverless Functions

## ✨ Key Features
- **7-Section Landing Page:** Includes Hero, Features, Stats, About, Categories, CTA, and Footer.
- **Dynamic Explorer:** Real-time fetching of items from the Express API.
- **Protected Routes:** Next.js Middleware prevents unauthorized access to the "Add Item" page.
- **Image Optimization:** Uses `next/image` with remote patterns for high-performance asset loading.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.

## 🔐 Demo Credentials
To access the "Add Item" feature, use the following credentials on the Login page:
- **Email:** `demo@gmail.com`
- **Password:** `123456`

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/nexuslist.git](https://github.com/your-username/nexuslist.git)
cd nexuslist

### 2. Backend Setup 
cd backend
npm install
npm run dev # Starts server on http://localhost:5000

### 3. Fronted Setup
cd frontend
npm install
npm run dev # Starts Next.js on http://localhost:3000

