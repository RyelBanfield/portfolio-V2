import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getPinnedProjects, getScreenshots } from '../API';
import Navbar from './Navbar';
// import Header from './Header';
// import Projects from './Projects';
// import About from './About';
// import Contact from './Contact';
// import Footer from './Footer';

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
      <Router>
        <Navbar />
      </Router>
      {/* <Header />
      <Projects ProjectsData={projects} />
      <About />
      <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
