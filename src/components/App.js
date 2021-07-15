import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPinnedProjects, getScreenshot, getRateLimit } from '../API';

getRateLimit();

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [projects, setProjects] = useState([]);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    getPinnedProjects().then((projects) => {
      setProjects(projects.map((project) => project));
      setScreenshots(projects.map((project) => getScreenshot(project.node.name)));
    });
  }, []);

  if (projects.length === 0 || screenshots.length === 0) {
    console.log('Loading');
  } else {
    console.log(projects);
    console.log(screenshots);
  }

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
};
export default App;

// https://api.github.com/repos/RyelBanfield/${project.node.name}/contents/Screenshot.png
