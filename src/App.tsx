/**
 * App.jsx
 *
 * Root component. Wraps the app in:
 * 1. AppProvider — so every component has access to role/user/auth
 * 2. BrowserRouter (in main.jsx) — for React Router
 * 3. AppRoutes — renders the correct page for the current URL
 */

import AppRoutes from "./Routes/AppRoutes";
import { AppProvider } from "./Context/AppContext";
import { ToastContainer } from "react-toastify";

// Global spinner keyframe for Button loading state
const globalStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  
  //  
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  input::placeholder {
    color: #9CA3AF;
  }

  input, select, button {
    font-family: 'Inter', sans-serif;
  }
`;

const App = () => {
  return (
    <AppProvider>
      <style>{globalStyle}</style>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </AppProvider>
  );
};

export default App;
