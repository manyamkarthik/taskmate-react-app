
import task from "../assets/task.png";
import { useState } from "react";
import "./Header.css"
export const Header = ({theme,setTheme}) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogoClick = () => {
    setShowModal(true); // Show the modal when the logo is clicked
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal
  };
    
  return (
    <>
    <header className="header">
            <div className="logo" onClick={handleLogoClick}>
                <img src={task} alt="" />
                <span>TaskMate</span>
            </div>
            <span className="themeSelector">
                <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("gOne")} className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
                <span onClick={() => setTheme("gTwo")} className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
                <span onClick={() => setTheme("gThree")} className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
            </span>
            
        </header>
        {showModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>Welcome to TaskMate!</h2>
            <p>Organize your tasks effortlessly with TaskMate.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
        </>
  )
}
