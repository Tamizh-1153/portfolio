import React from "react"
import "./project.css"
import gmail_clone from "../../assets/Gmail_clone.jpg"
import eShopping from "../../assets/eShopping.png"
import realEstate from "../../assets/realEstate.png"
import project5 from "../../assets/Project 5.png"
import project6 from "../../assets/Project 6.png"
import project7 from "../../assets/IMDB clone.png"
import crm from "../../assets/crm.png"
import {
  Menu,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTarget,
} from "@mantine/core"
import { IconClipboard } from "@tabler/icons-react"
import { copy } from "../../App"

const Project = () => {
  return (
    <section id="projects" className="work container section">
      <h2 className="work_title">Projects</h2>
      <div className="work_container">

      {/* Project 7 */}
      <h3 className="project_title">IMDB Clone</h3>
        <div className="project_img img7">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://imdb-clone-tm.netlify.app/"
          >
            <img src={project7} alt="loading" />
          </a>
        </div>

        <div className="project_desp_wrapper content7">
          <h3 className="desp_title">IMDB Clone</h3>
          <p className="project_description">
          This project aims to replicate the functionality of the popular Internet Movie Database (IMDb) using the <strong>MERN</strong>  (<strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React</strong>, <strong>Node.js</strong>) stack. It incorporates modern technologies such as <strong>JWT</strong> authentication for secure user access, <strong>Mantine</strong> for a sleek and responsive UI, <strong>React Query</strong> for efficient API handling, and <strong>Redux</strong> for effective state management.
          </p>
          <div className="button_container">
            <Menu
              trigger="hover"
              withArrow
              transitionProps={{ transition: "rotate-right", duration: 200 }}
            >
              <MenuTarget>
                <a
                  className="btn project_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://imdb-clone-tm.netlify.app/"
                >
                  Website
                </a>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Demo account details</MenuLabel>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("tamil@gmail.com")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Email: tamil@gmail.com
                </MenuItem>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("password")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Password : password
                </MenuItem>
              </MenuDropdown>
            </Menu>
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
                    href="https://github.com/Tamizh-1153/imdb-clone-frontend"
                  >
                    Frontend
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/imdb-clone-backend"
                  >
                    Backend
                  </a>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
        </div>

        {/* Project 6 */}
        <h3 className="project_title">Recipe book</h3>
        <div className="project_img img6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://recipebook-tm.netlify.app/"
          >
            <img src={project6} alt="loading" />
          </a>
        </div>

        <div className="project_desp_wrapper content6">
          <h3 className="desp_title">Recipe book</h3>
          <p className="project_description">
            Recipe book website is a full-stack web application built using the
            MERN stack (<strong>MongoDB</strong>, <strong>Express</strong>,{" "}
            <strong>React</strong>, and
            <strong> Node.js</strong>) along with several other technologies for
            viewing, creating and adding recipes to their collection. The
            project utilizes <strong>Mantine</strong>,
            <strong> Bootstrap </strong> , <strong>Redux Toolkit </strong>,
            <strong> React Query </strong>, and <strong>React-Toastify </strong>
            , ensuring robust state management, enhanced user interface, smooth
            API interactions, and user-friendly notifications and{" "}
            <strong>JWT </strong>authentication which ensures secure access.
          </p>
          <div className="button_container">
            <Menu
              trigger="hover"
              withArrow
              transitionProps={{ transition: "rotate-right", duration: 200 }}
            >
              <MenuTarget>
                <a
                  className="btn project_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://recipebook-tm.netlify.app/"
                >
                  Website
                </a>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Demo account details</MenuLabel>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("tamil@gmail.com")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Email: tamil@gmail.com
                </MenuItem>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("password")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Password : password
                </MenuItem>
              </MenuDropdown>
            </Menu>
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
                    href="https://github.com/Tamizh-1153/recipeBook-frontend"
                  >
                    Frontend
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/recipeBook-backend"
                  >
                    Backend
                  </a>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
        </div>

        {/* Project 5 */}

        <h3 className="project_title">Instant Messaging with socket.io</h3>
        <div className="project_img img5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instant-messaging-tm.netlify.app/"
          >
            <img src={project5} alt="loading" />
          </a>
        </div>

        <div className="project_desp_wrapper content5">
          <h3 className="desp_title">Instant Messaging with socket.io</h3>
          <p className="project_description">
            The website will provide users with the ability to create accounts,
            join chat with other users, and engage in real-time conversations
            with other users. It utilizes MERN (<strong> MongoDB</strong>,
            <strong>Express</strong>,<strong> React</strong>,
            <strong> Node.js</strong>) stack for the backend and front-end
            development, integrating powerful libraries like{" "}
            <strong>Auth0</strong> for authentication,{" "}
            <strong>Socket.io</strong> for real-time communication,{" "}
            <strong>Mantine</strong> for UI components,{" "}
            <strong>Redux Toolkit</strong> for state management,{" "}
            <strong>and React Query </strong>
            for efficient data fetching.
          </p>
          <div className="button_container">
            <Menu
              trigger="hover"
              withArrow
              transitionProps={{ transition: "rotate-right", duration: 200 }}
            >
              <MenuTarget>
                <a
                  className="btn project_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instant-messaging-tm.netlify.app/"
                >
                  Website
                </a>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Demo account details</MenuLabel>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("puppy@gmail.com")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Email: puppy@gmail.com
                </MenuItem>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("Qwertyui1234@!")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Password : Qwertyui1234@!
                </MenuItem>
              </MenuDropdown>
            </Menu>
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
                    href="https://github.com/Tamizh-1153/instant_messaging_client"
                  >
                    Frontend
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    className="sourceCode_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Tamizh-1153/instant_messaging_server"
                  >
                    Backend
                  </a>
                </MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
        </div>

        {/* Project 1 */}

        <h3 className="project_title">Gmail clone</h3>
        <div className="project_img img1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gmail-clone-tm.netlify.app/"
          >
            <img src={gmail_clone} alt="loading" />
          </a>
        </div>

        <div className="project_desp_wrapper content1">
          <h3 className="desp_title">Gmail clone</h3>
          <p className="project_description">
            Gmail Clone is a full-stack web application developed using
            cutting-edge technologies to replicate the core features and
            functionalities of the popular email platform, Gmail. This project
            showcases the power of <strong> React</strong>,{" "}
            <strong>Node.js</strong>, <strong>MongoDB</strong>, and{" "}
            <strong>Material-UI</strong> to create a seamless and responsive
            email management system. <strong>JWT</strong> authentication which
            ensures secure access and a personalized mail service.
          </p>
          <div className="button_container">
            <Menu
              trigger="hover"
              withArrow
              transitionProps={{ transition: "rotate-right", duration: 200 }}
            >
              <MenuTarget>
                <a
                  className="btn project_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gmail-clone-tm.netlify.app/"
                >
                  Website
                </a>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Demo account details</MenuLabel>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("tamil@gmail.com")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Email: tamil@gmail.com
                </MenuItem>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("password")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Password : password
                </MenuItem>
              </MenuDropdown>
            </Menu>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://online-shopping-tm.netlify.app/"
          >
            <img src={eShopping} alt="loading" />
          </a>
        </div>

        <div className="project_desp_wrapper content2">
          <h3 className="desp_title">Online Shopping with Stripe</h3>
          <p className="project_description">
            The Online Shopping Website is a full-stack web application built
            using the MERN stack (<strong>MongoDB</strong>,{" "}
            <strong>Express</strong>, <strong>React</strong>, and
            <strong> Node.js</strong>) along with several other technologies to
            provide users with a seamless online shopping experience. The
            project utilizes <strong>Mantine Core</strong>,{" "}
            <strong>Redux Toolkit</strong>,<strong> React Query</strong>, and{" "}
            <strong>React-Toastify</strong>, ensuring robust state management,
            enhanced user interface, smooth API interactions, and user-friendly
            notifications and <strong>JWT </strong>authentication which ensures
            secure access and a personalized shopping experience.{" "}
            <strong>Stripe</strong> payment integration allows payment from user
            and using stripe webhook, order details are updated in database.
          </p>
          <div className="button_container">
            <Menu
              trigger="hover"
              withArrow
              transitionProps={{ transition: "rotate-right", duration: 200 }}
            >
              <MenuTarget>
                <a
                  className="btn project_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://online-shopping-tm.netlify.app/"
                >
                  Website
                </a>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Demo account details</MenuLabel>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("tamil@gmail.com")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Email: tamil@gmail.com
                </MenuItem>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("password")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Password : password
                </MenuItem>
              </MenuDropdown>
            </Menu>
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://real-estate-booking-tm.netlify.app/"
          >
            <img src={realEstate} alt="loading" />
          </a>
        </div>

        <div className="project_desp_wrapper content3">
          <h3 className="desp_title">Real Estate Booking</h3>
          <p className="project_description">
            The Real Estate Platform is a cutting-edge web application that
            leverages the power of <strong>React</strong>,{" "}
            <strong>Node.js</strong>, <strong>Auth0</strong> for authentication,
            <strong> React Query</strong> for data fetching,{" "}
            <strong>MongoDB</strong> for data storage,<strong> Mantine </strong>
            for UI components, and Axios for API interactions. This platform
            provides a seamless and intuitive experience for users interested in
            buying, selling, or renting real estate properties.
          </p>
          <div className="button_container">
            <Menu
              trigger="hover"
              withArrow
              transitionProps={{ transition: "rotate-right", duration: 200 }}
            >
              <MenuTarget>
                <a
                  className="btn project_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://real-estate-booking-tm.netlify.app/"
                >
                  Website
                </a>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Demo account details</MenuLabel>
                <MenuItem style={{ color: "#475569" }}>
                  Use any Google/Microsoft/Facebook account to login
                </MenuItem>
              </MenuDropdown>
            </Menu>
            <Menu
              trigger="hover"
              withArrow
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://crm-application-tm.netlify.app/"
          >
            <img src={crm} alt="loading" />
          </a>
        </div>

        <div className="project_desp_wrapper content4">
          <h3 className="desp_title">CRM Web App</h3>
          <p className="project_description">
            The CRM Web App is a powerful and scalable customer relationship
            management solution that utilizes <strong> React</strong>,{" "}
            <strong>Node.js</strong>, <strong>JWT</strong> for authentication,
            and <strong>MongoDB</strong> for data storage. This web application
            is designed to help businesses manage and enhance their interactions
            with customers, streamline communication, and improve customer
            satisfaction.
          </p>
          <div className="button_container">
            <Menu
              trigger="hover"
              withArrow
              transitionProps={{ transition: "rotate-right", duration: 200 }}
            >
              <MenuTarget>
                <a
                  className="btn project_btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://crm-application-tm.netlify.app/"
                >
                  Website
                </a>
              </MenuTarget>
              <MenuDropdown>
                <MenuLabel>Demo account details</MenuLabel>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("tamizh1153@gmail.com")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Email: tamizh@gmail.com
                </MenuItem>
                <MenuItem
                  style={{ cursor: "auto", color: "#475569" }}
                  rightSection={
                    <IconClipboard
                      onClick={() => copy("password")}
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  Password : password
                </MenuItem>
              </MenuDropdown>
            </Menu>
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
