import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getPinnedProjects, getScreenshots } from '../API';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [projects, setProjects] = useState([]);
  const [screenshots, setScreenshots] = useState([]);
  const [newProjects, setNewProjects] = useState([]);

  const addUrls = async (projects, screenshots) => {
    const newProjects = projects.map((project, index) => ({
      ...project.node, screenshot: screenshots[index],
    }));
    // console.log(newProjects);
    return newProjects;
  };

  useEffect(() => {
    getPinnedProjects().then((projects) => {
      setProjects(projects);
      getScreenshots(projects).then((screenshots) => {
        setScreenshots(screenshots);
        addUrls(projects, screenshots).then((newProjects) => setNewProjects(newProjects));
      });
    });
  }, []);

  useEffect(() => {
    console.log(projects);
    console.log(screenshots);
    console.log(newProjects);
  }, [projects, screenshots, newProjects]);

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
};

export default App;
