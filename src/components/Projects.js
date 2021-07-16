import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Projects = ({ ProjectData }) => (
  <Container>
    {ProjectData.map((project) => (
      <>
        <p key={project.name}>{project.name}</p>
      </>
    ))}
  </Container>
);

Projects.propTypes = {
  ProjectData: PropTypes.arrayOf.isRequired,
};

export default Projects;
