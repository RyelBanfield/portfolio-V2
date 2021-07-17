import { useEffect, useState } from 'react';
import { getPinnedProjects, getScreenshots } from '../API';
import Header from './Header';
// import Projects from './Projects';

const Home = () => {
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
    <main>
      <Header />
      {/* <Projects ProjectsData={projects} /> */}
    </main>
  );
};

export default Home;
