import React from "react"
import "./project.css"
import gmail_clone from "../../assets/Gmail_clone.jpg"
import eShopping from "../../assets/eShopping.png"
import realEstate from "../../assets/realEstate.png"
import crm from "../../assets/crm.png"
import { Menu, MenuDropdown, MenuItem, MenuLabel, MenuTarget } from "@mantine/core"

const Project = () => {
  return (
    <section id="projects" className="work container section">
      <h2 className="work_title">Projects</h2>
      <div className="work_container">
        {/* Project 1 */}

        <h3 className="project_title">Gmail clone</h3>
        <div className="project_img img1">
          <img src={gmail_clone} alt="loading" />
        </div>

        <div className="project_desp_wrapper content1">
          <h3 className="desp_title">Gmail clone</h3>
          <p className="project_description">
            Gmail Clone is a full-stack web application developed using
            cutting-edge technologies to replicate the core features and
            functionalities of the popular email platform, Gmail. This project
            showcases the power of React, Node.js, MongoDB, and Material-UI to
            create a seamless and responsive email management system.JWT
            authentication which ensures secure access and a personalized mail
            service.
          </p>
          <div className="button_container">
            <a
              className="btn project_btn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://gmail-clone-tm.netlify.app/"
            >
              Website
            </a>
            <Menu
              withArrow
              trigger="hover"
              transitionProps={{ transition: "rotate-right", duration: 400 }}
            >
              <MenuTarget>
                <button className="btn project_btn">Github</button>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Source code</MenuLabel>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/Gmail-clone-frontend"
                  >
                    Frontend
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/Gmail-clone-backend"
                  >
                    Backend
                  </a>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
        </div>

        {/* Project 2 */}

        <h3 className="project_title">Online Shopping with Stripe</h3>
        <div className="project_img img2">
          <img src={eShopping} alt="loading" />
        </div>

        <div className="project_desp_wrapper content2">
          <h3 className="desp_title">Online Shopping with Stripe</h3>
          <p className="project_description">
            The Online Shopping Website is a full-stack web application built
            using the MERN stack (MongoDB, Express, React, and Node.js) along
            with several other technologies to provide users with a seamless
            online shopping experience. The project utilizes Mantine Core, Redux
            Toolkit, React Query, Axios, and React-Toastify, ensuring robust
            state management, enhanced user interface, smooth API interactions,
            and user-friendly notifications and JWT authentication which ensures
            secure access and a personalized shopping experience. Stripe payment
            integration allows payment from user and using stripe webhook, order
            details are updated in database.
          </p>
          <div className="button_container">
            <a
              className="btn project_btn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://online-shopping-tm.netlify.app/"
            >
              Website
            </a>
            <Menu
              withArrow
              trigger="hover"
              transitionProps={{ transition: "rotate-right", duration: 400 }}
            >
              <MenuTarget>
                <button className="btn project_btn">Github</button>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Source code</MenuLabel>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/eShopping-client"
                  >
                    Frontend
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/eShopping-server"
                  >
                    Backend
                  </a>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
        </div>

        {/* Project 3 */}

        <h3 className="project_title">Real Estate Booking</h3>
        <div className="project_img img3">
          <img src={realEstate} alt="loading" />
        </div>

        <div className="project_desp_wrapper content3">
          <h3 className="desp_title">Real Estate Booking</h3>
          <p className="project_description">
            The Real Estate Platform is a cutting-edge web application that
            leverages the power of React, Node.js, OAuth for authentication,
            React Query for data fetching, MongoDB for data storage, Mantine for
            UI components, and Axios for API interactions. This platform
            provides a seamless and intuitive experience for users interested in
            buying, selling, or renting real estate properties.
          </p>
          <div className="button_container">
            <a
              className="btn project_btn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://real-estate-booking-tm.netlify.app/"
            >
              Website
            </a>
            <Menu
              withArrow
              trigger="hover"
              transitionProps={{ transition: "rotate-right", duration: 400 }}
            >
              <MenuTarget>
                <button className="btn project_btn">Github</button>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Source code</MenuLabel>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/real-estate-booking-client"
                  >
                    Frontend
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/real-estate-booking-server"
                  >
                    Backend
                  </a>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
        </div>

        {/* Project 4 */}
        <h3 className="project_title">CRM Web App</h3>
        <div className="project_img img4">
          <img src={crm} alt="loading" />
        </div>

        <div className="project_desp_wrapper content4">
          <h3 className="desp_title">CRM Web App</h3>
          <p className="project_description">
            The CRM Web App is a powerful and scalable customer relationship
            management solution that utilizes React, Node.js, JWT for
            authentication, and MongoDB for data storage. This web application
            is designed to help businesses manage and enhance their interactions
            with customers, streamline communication, and improve customer
            satisfaction.JWT authentication which ensures secure access for the
            platform.
          </p>
          <div className="button_container">
            <a
              className="btn project_btn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://crm-application-tm.netlify.app/"
            >
              Website
            </a>
            <Menu
              withArrow
              trigger="hover"
              transitionProps={{ transition: "rotate-right", duration: 400 }}
            >
              <MenuTarget>
                <button className="btn project_btn">Github</button>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Source code</MenuLabel>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/CRM-App-frontend"
                  >
                    Frontend
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/CRM-App"
                  >
                    Backend
                  </a>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
