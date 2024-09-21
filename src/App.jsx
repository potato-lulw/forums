import { Route, Routes } from "react-router-dom";
import Header from "./myComponents/header";
import Home from "./pages/home";
import Forums from "./pages/forums";
import SubForum from "./pages/subForum";

import ThreadsPage from "./pages/threadsPage";

function App() {
  return (
    <div className="bg-myBg min-h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forums/subforum/:subForumTitle" element={<SubForum />} />
        <Route path="/forums/:title" element={<Forums />} />
        <Route path="/forums/threads/:title" element={<ThreadsPage />} /> {/* New route for thread */}
      </Routes>
    </div>
  );
}

export default App;
