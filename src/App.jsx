import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./myComponents/header";
import Home from "./pages/home";
import Forums from "./pages/forums";
import SubForum from "./pages/subForum";
import ThreadsPage from "./pages/threadsPage";
import Login from "./pages/login";
import Register from "./pages/register";
import Footer from "./myComponents/footer";

function App() {
  const location = useLocation();

  return (
    <div className="bg-myBg min-h-screen text-white">
      {/* Conditionally render Header */}
      {location.pathname !== "/login" && location.pathname !== "/register" && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forums/subforum/:subForumTitle" element={<SubForum />} />
        <Route path="/forums/:title" element={<Forums />} />
        <Route path="/forums/threads/:title" element={<ThreadsPage />} /> {/* New route for thread */}
      </Routes>

      {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
    </div>
  );
}

export default App;
