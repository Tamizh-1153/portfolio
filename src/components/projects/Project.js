import React from "react"
import "./project.css"
import gmail_clone from "../../assets/Gmail_clone.jpg"
import url_shortener from "../../assets/Url_shortener.png"
import makeup_api from "../../assets/Makeup_API.png"

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
            Gmail clone using React, MaterialUI, NodeJs, mongoDB with user
            authentication.
          </p>
          <a
            className="btn project_btn"
            target="_blank"
            rel="noopener"
            href="https://gmail-clone-tm.netlify.app/"
          >
            Website
          </a>
        </div>

        {/* Project 2 */}

        <h3 className="project_title">URL Shortener</h3>
        <div className="project_img img2">
          <img src={url_shortener} alt="loading" />
        </div>

        <div className="project_desp_wrapper content2">
          <h3 className="desp_title">URL Shortener</h3>
          <p className="project_description">
            URL shortener using React, Bootstrap, NodeJs, mongoDB with user
            authentication.
          </p>
          <a
            className="btn project_btn"
            target="_blank"
            rel="noopener"
            href="https://urlshortener-tm.netlify.app/"
          >
            Website
          </a>
        </div>

        {/* Project 3 */}

        <h3 className="project_title">Makeup Products API</h3>
        <div className="project_img img3">
          <img src={makeup_api} alt="loading" />
        </div>

        <div className="project_desp_wrapper content3">
          <h3 className="desp_title">Makeup Products API</h3>
          <p className="project_description">
            Makeup products displaying via Heroku API using HTML, CSS,
            Javascript, Bootstrap.
          </p>
          <a
            className="btn project_btn"
            target="_blank"
            rel="noopener"
            href="https://gmail-clone-tm.netlify.app/"
          >
            Website
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project
