import { useEffect, useState } from 'react';
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

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(projects);
  }, [projects]);

  return (
    <main className="projects-container">
      {projects.map((project) => (
        <Project ProjectData={project} key={project.name} />
      ))}
    </main>
  );
};

export default Projects;
