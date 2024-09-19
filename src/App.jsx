import { Route, Routes } from "react-router-dom"
import Header from "./myComponents/header"
import Home from "./pages/home"


function App() {


  return (

    <div className="bg-myBg min-h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dex" element={<Dex />} />
        <Route path="/article" element={<Article />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/user" element={<User />} /> */}
      </Routes>
    </div>
  )
}

export default App
