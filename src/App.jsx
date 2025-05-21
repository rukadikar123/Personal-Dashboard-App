import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Extras from "./components/Extras"
import { useState } from "react"


function App() {
const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div onClick={()=>setIsOpen(false)} className="font-sans animate-fadeIn bg-gray-50 min-h-screen">
        <Navbar setIsOpen={setIsOpen}  isOpen={isOpen} />
        <main className="max-w-4xl mx-auto z-0 relative">
          <Routes>
            <Route path="/"  element={<Profile/>}/>
            <Route path="/experience"  element={<Experience/>}/>
            <Route path="/skills"  element={<Skills/>}/>
            <Route path="/extras"  element={<Extras/>}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
