import { useEffect, useState } from 'react';
import { getPinnedProjects, getScreenshots } from '../API';
import Projects from './Projects';

const App = () => {
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
    console.log(projects);
  }, [projects]);

  return (
    <>
      <Projects ProjectsData={projects} />
    </>
  );
};

export default App;
