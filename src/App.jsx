import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Importing Navbar component
import Profile from "./components/Profile"; // Importing Profile page
import Experience from "./components/Experience"; // Importing Experience page
import Skills from "./components/Skills"; // Importing Skills page
import Extras from "./components/Extras"; // Importing Extras page
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false); // State to control mobile menu
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="font-sans animate-fadeIn bg-gray-50 min-h-screen"
      >
        {/* Navbar receives state and setter as props */}
        <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
        {/* Main content area with a max width */}
        <main className="max-w-4xl mx-auto z-0 relative">
          {/* Define route paths and their corresponding components */}
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/extras" element={<Extras />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
