import { Route, Routes } from "react-router-dom"
import Header from "./myComponents/header"
import Home from "./pages/home"
import Forums from "./pages/forums"


function App() {


  return (

    <div className="bg-myBg min-h-screen text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dex" element={<Dex />} />
        <Route path="/article" element={<Article />} /> */}
        <Route path="/forums/:title" element={<Forums />} />
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
    </div>
  )
}

export default App
