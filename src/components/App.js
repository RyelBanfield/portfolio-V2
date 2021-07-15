/* eslint-disable no-unused-vars */
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

  useEffect(() => {
    getPinnedProjects().then((projects) => {
      setProjects(projects.map((project) => project));
      setScreenshots(getScreenshots(projects));
    });
  }, []);

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
};

export default App;
