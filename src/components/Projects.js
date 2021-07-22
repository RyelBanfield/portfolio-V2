import { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { getPinnedProjects, getScreenshots } from '../API';
import Project from './Project';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const addUrls = async (projects, urls) => {
    const projectsWithUrls = projects.map((project, index) => ({
      ...project.node, screenshotUrl: urls[index],
    }));
    // console.log(projectsWithUrls);
    return projectsWithUrls;
  };

  useEffect(() => {
    getPinnedProjects().then((projects) => {
      getScreenshots(projects).then((urls) => {
        addUrls(projects, urls).then((projectsWithUrls) => setProjects(projectsWithUrls));
      });
    });
  }, []);

  // useEffect(() => {
  //   // eslint-disable-next-line no-console
  //   console.log(projects);
  // }, [projects]);

  if (projects.length === 0) {
    return (
      <div className="loading-screen">
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <main className="projects-container fade-in">
      <div className="projects-header">
        <h1>My Projects 🚀</h1>
        <br />
        <p>
          Fetched from my 📌 repos on
          {' '}
          <a href="https://github.com/RyelBanfield" target="_blank" rel="noreferrer">Github</a>
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <Project ProjectData={project} key={project.name} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
