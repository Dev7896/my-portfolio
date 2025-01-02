import "../styles/header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  function handleclick() {
    setOpen(!open);
  }
  useEffect(() => {
    function handleOutsideClick(e) {
      if (!e.target.closest(".slidlist") && !e.target.closest(".hamburger")) {
        setOpen(false);
      }
    }

    function handleScroll() {
      setOpen(false);
    }

    if (open) {
      // Add event listeners when menu is open
      document.addEventListener("click", handleOutsideClick);
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listeners when menu is closed or component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <header>
      <div className="logo">rahul acharya</div>
      <nav className="desktop">
        <ul>
          <li>
            <a href="#Aboutme">about</a>
          </li>
          <li>
            <a href="#Experience">experience</a>
          </li>
          <li>
            <a href="#contactme">contacts</a>
          </li>
          <li>
            <a href="#projects">projects</a>
          </li>
        </ul>
      </nav>
      <nav className="mobile">
        <div className="hamburger" onClick={handleclick}>
          {open ? (
            <i class="ri-close-large-line ri-2x"></i>
          ) : (
            <i className="ri-menu-line ri-2x"></i>
          )}
        </div>
        {open && (
          <ul className="slidlist">
            <li>
              <a href="#Aboutme">about</a>
            </li>
            <li>
              <a href="#Experience">experience</a>
            </li>
            <li>
              <a href="#contactme">contacts</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
