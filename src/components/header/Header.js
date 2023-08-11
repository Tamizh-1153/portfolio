import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu((prevState) => !prevState)
  }
  document.body.style.overflowY = mobileMenu ? "hidden" : "auto"

  return (
    <>
      <header className="header container">
        <nav>
          <ul className="header_menu">
            <li>
              <a className="header_link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="header_link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="header_link" href="#contact">
                Contact
              </a>
            </li>
            <li className="header_line"></li>
            {/* <li>
              <button className="header_mode">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            </li> */}
            <li>
              <a
                className="resume btn"
                href="https://drive.google.com/file/d/1dZXYLNKBLUsWdgl615jFJ2YMdPypyP_k/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
          <button onClick={toggleMenu} className="header_bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </header>
      {/* Mobile Menu */}
      <div className={mobileMenu ? "mobile_nav" : "hide"}>
        <nav>
          <ul className="mobile_menu">
            <li>
              <a
                onClick={() => setMobileMenu(false)}
                href="#about"
                className="mobile_link"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setMobileMenu(false)}
                href="#projects"
                className="mobile_link"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => setMobileMenu(false)}
                href="#contact"
                className="mobile_link"
              >
                Contact
              </a>
            </li>
            <li className="mobile_line"></li>
            {/* <li>
              <button
                onClick={() => setMobileMenu(false)}
                className="mobile_mode"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </button>
            </li> */}
            <li>
              <a
                onClick={() => setMobileMenu(false)}
                className="mobile_btn btn"
                href="https://drive.google.com/file/d/1dZXYLNKBLUsWdgl615jFJ2YMdPypyP_k/view?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
