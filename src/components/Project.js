import React from "react";



const Project = ({img,name,desc}) => {

    return ( 
        <div className="project">
            <img src={`${process.env.PUBLIC_URL}/images/${img}`} alt="" />
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
     );
}
 
export default Project;