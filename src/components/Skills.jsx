import React from 'react'

import "../styles/skills.css"
import { Github, Html, Css3, Bootstrap, Reactt, Javascript } from "../imgs/skills"

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-section-bg" id="skillsBg"></div>

      <div className="skills-slide-left revealLeft"></div>
      <div className="skills-slide-right revealRight"></div>

      <div className="container">

        <h2>Skills</h2>
        <p>
          Here is a list of my knowledge and abilities!
        </p>

        <div className="skills-wrapper ">

          <h3 className="revealLeft">Languages and Frameworks</h3>
          <div className="langs-frames-wrapper revealRight">

            <div className="skill">
              <img src={Github} alt="" className="skill-img github-skill" />
              <p className="skill-title ">Github</p>
            </div>
            <div className="skill">
              <img src={Javascript} alt="" className="skill-img" />
              <p className="skill-title ">Javascript</p>
            </div>
            <div className="skill">
              <img src={Reactt} alt="" className="skill-img" />
              <p className="skill-title ">React</p>
            </div>
            <div className="skill">
              <img src={Html} alt="" className="skill-img" />
              <p className="skill-title">HTML5</p>
            </div>
            <div className="skill">
              <img src={Bootstrap} alt="" className="skill-img" />
              <p className="skill-title">Bootstrap</p>
            </div>
            <div className="skill">
              <img src={Css3} alt="" className="skill-img" />
              <p className="skill-title">CSS3</p>
            </div>

          </div>
      </div>
        
      </div>
    </section>
  )
}

export default Skills