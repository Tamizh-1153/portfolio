import React from "react"
import "./intro.css"
import intro_pic from '../../assets/Intro_pic.jpg'

const Intro = () => {
  return (
    <section className="intro container">
      <img className="intro_image" src={intro_pic} alt="loading" />
      <h2 className="intro_name">Hi, I'm Tamilarasan</h2>
      <h1 className="intro_title">
        Full stack Web <br /> developer
      </h1>
      <p className="intro_description">
        <strong>Full Stack Developer</strong> with a passion for creating
        innovative web applications and solving complex technical challenges.
        Equipped with a diverse skill set that spans both{" "}
        <strong>front-end </strong> and
        <strong> back-end</strong> technologies, I bring a holistic approach to
        software development.
      </p>
      <a className="intro_btn btn" href="#contact">
        Reach out
      </a>
    </section>
  )
}

export default Intro
