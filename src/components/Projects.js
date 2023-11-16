// src/components/Projects.js

import React from 'react';
import '../App.css';
import ProjectImage1 from '../images/project1.jpg'; // Import your project images
import ProjectImage2 from '../images/project2.jpg'; // Import your project images

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1.',
    image: ProjectImage1,
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2.',
    image: ProjectImage2,
    link: 'https://example.com/project2',
  },
];

const Projects = () => {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="ProjectItem">
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
