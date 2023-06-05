import React from "react";
import '../styles/projects.css'
import data from '../data/projectsData'

import Project from "./Project";

const Projects = () => {

    const projects = data.map((project) => {
        const {id,img,name,desc} = project
        return (
            <Project key={id} img={img} name={name} desc={desc}/>
        )
    })

    return ( 
        <div className="projects">
            <h1 className="section-h1">Projekty</h1>
            {projects}
        </div>
     );
}
 
export default Projects;