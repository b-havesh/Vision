# Vision: AI-Powered Image Analysis Web Application

Vision is an innovative web application that utilizes cutting-edge AI to analyze images based on user prompts. It allows users to upload images, provide a prompt, and receive an AI-generated response powered by the Google Gemini API. The application is built using a modern tech stack, including React for the frontend, Express for the backend, and Tailwind CSS for responsive and clean styling.

## Features
- **AI Image Analysis**: Upload an image, enter a prompt, and get insightful responses from the AI.
- **User Authentication**: Secure user authentication and access using Auth0.
- **Smooth Animations**: Delightful user experience with animations powered by Framer Motion.
- **Responsive Design**: Styled using Tailwind CSS to ensure a responsive and user-friendly interface.
- **Fast & Efficient**: Developed using Vite for fast build processes and optimized performance.
- **Seamless Scrolling**: Locomotive Scroll integrated for smooth scrolling and parallax effects.
- **File Upload Support**: Image uploads handled via Multer on the backend.

## Tech Stack

### Frontend
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[React-DOM](https://reactjs.org/docs/react-dom.html)**: Renders React components to the DOM.
- **[React Router DOM](https://reactrouter.com/web/guides/quick-start)**: For client-side routing.
- **[Framer Motion](https://www.framer.com/motion/)**: Handles animations and transitions in React.
- **[Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)**: Smooth scrolling and parallax effects.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[Vite](https://vitejs.dev/)**: Fast and modern frontend build tool.

### Backend
- **[Express](https://expressjs.com/)**: Web framework for building server-side applications.
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**: Middleware to handle Cross-Origin Resource Sharing.
- **[Multer](https://github.com/expressjs/multer)**: Middleware for handling file uploads (images).

### APIs & AI
- **[Google Gemini API (@google/generative-ai)](https://developers.google.com/)**: Provides AI-based responses for image and prompt queries.
- **[OpenAI API](https://openai.com/api/)**: Additional AI capabilities.

### Authentication
- **[Auth0 React](https://auth0.com/docs/libraries/auth0-react)**: Handles user authentication and secure access.

### Utilities
- **[Nodemon](https://nodemon.io/)**: Automatically restarts the server during development.
- **[Dotenv](https://github.com/motdotla/dotenv)**: Environment variable management.

### Linting & Development Tools
- **[ESLint](https://eslint.org/)**: JavaScript linting tool for maintaining code quality.
- **[PostCSS](https://postcss.org/)**: Transforms CSS with JavaScript plugins.
- **[Autoprefixer](https://github.com/postcss/autoprefixer)**: Automatically adds vendor prefixes to CSS.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/vision.git
   cd vision
2. Install dependencies for both frontend and backend:
   ```bash
   npm install
   # or
   yarn install
3. Create a .env file in the root directory with your environment variables:
   ```bash
   AUTH0_DOMAIN=your-auth0-domain
   AUTH0_CLIENT_ID=your-auth0-client-id
   GOOGLE_API_KEY=your-google-gemini-api-key
   OPENAI_API_KEY=your-openai-api-key
4. Navigate to the backend folder and install backend dependencies:
   ```bash
   cd backend
   npm install
   cd ..
5. Run both frontend and backend servers in development mode:
   ```bash
   npm run dev

## Project Structure
   ```bash
   vision/
   │
   ├── backend/              # Backend files
   │   ├── routes/           # API routes
   │   ├── middleware/       # Multer and CORS middleware
   │   └── server.js         # Main server file
   │
   ├── src/                  # Frontend files
   │   ├── components/       # Reusable components
   │   ├── pages/            # Application pages (e.g., Home, Login)
   │   └── App.js            # Main React component
   │
   ├── public/               # Public files (e.g., images, favicon)
   └── .env                  # Environment variables
