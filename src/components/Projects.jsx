import React from "react";

// Icons for projects 
import { Node, Javascript, MySQL, Heroku, Bootstrap, Express, Handlebars, Sequelize } from "../imgs/skills"

// Thumb Nails for projects 
import { POPUmai, Platello } from "../gifs/projects"

import manOnPc from "../svgs/working-with-laptop.svg";
import "../styles/project.css"
import "../styles/animations.css"

// Animations 
import { RevealY } from "../utils/animation.js" 

const Projects = ({ currentPage, handlePageChange }) => {

  return (
    <section id="projects" className="project-section" >
      <div className="container">
        <h2>Projects</h2>
        <div className="project-content reveal">
          <h3>Prime</h3>
          <div className="project-primary">
            
            {/* POP Umai Project  */}

            <div className="project-prime-card reveal">
              <div className="project-prime-card-left">
                <img src={POPUmai} alt="project" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">POP Umai - <span className="project-prime-title-sub">Freelance</span></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit totam incidunt ipsam, iusto, aperiam facilis officiis pariatur fugiat eligendi enim architecto aliquid vitae accusamus dolor voluptatibus. Reprehenderit, error eius.</p>
                <div className="project-prime-tech-title">
                  Technologies and Tools
                </div>

                <div className="project-prime-tech">
                  <img className="tech-icon" src={Node} alt="" />
                  <img className="tech-icon" src={Javascript} alt="" />
                  <img className="tech-icon" src={MySQL} alt="" />
                  <img className="tech-icon" src={Heroku} alt="" />
                  <img className="tech-icon" src={Bootstrap} alt="" />
                  <img className="tech-icon invert" src={Express} alt="" />
                  <img className="tech-icon invert" src={Handlebars} alt="" />
                  <img className="tech-icon" src={Sequelize} alt="" />
                </div>

                <div className="project-prime-btns">
                  <a href="https://pop-umai.herokuapp.com/" target="blank" className="project-prime-btn deploy-btn">DEPLOY</a>
                  <a href="https://github.com/PreDevz/POP-Umai" target="blank" className="project-prime-btn github-btn">GITHUB</a>
                </div>
              </div>
            </div>

            {/* Tech Blog Project  */}

            <div className="project-prime-card reverse reveal">
              <div className="project-prime-card-left">
                <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="project" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">Project Title</div>
                <p className="project-prime-middle-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit totam incidunt ipsam, iusto, aperiam facilis officiis pariatur fugiat eligendi enim architecto aliquid vitae accusamus dolor voluptatibus. Reprehenderit, error eius.</p>
                <div className="project-prime-tech"></div>
                <div className="project-prime-btns">

                </div>
              </div>
            </div>

            {/* Platello Project  */}

            <div className="project-prime-card reveal">
              <div className="project-prime-card-left">
                <img src={ Platello } alt="project" className="project-prime-thumbnail"/>
              </div>

              <div className="project-prime-card-right">
                <div className="project-prime-title">Project Title</div>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit totam incidunt ipsam, iusto, aperiam facilis officiis pariatur fugiat eligendi enim architecto aliquid vitae accusamus dolor voluptatibus. Reprehenderit, error eius.</p>
                <div className="project-prime-tech"></div>
                <div className="project-prime-btns">

                </div>
              </div>
            </div>

          </div>

          <div className="project-more">

            <div className="project-more-left">
              <a href="#moreProjects"
                onClick={() => handlePageChange('MoreProjects')}
                  className="view-all-projects">View All Projects</a>
            </div>

            <div className="project-more-right">
              <p className="check-out-my-projects-message revealRight">Hey, I have more projects you can check out, click the button next to me!</p>
              <img src={manOnPc} alt="Nate working on a laptop" className="man-laptop" />
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

window.addEventListener("scroll", RevealY);

export default Projects;