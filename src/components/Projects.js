import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ ProjectsData }) => (
  <>
    {ProjectsData.map((project) => (
      <Project ProjectData={project} key={project.name} />
    ))}
  </>
);

Projects.defaultProps = {
  ProjectsData: [],
};

Projects.propTypes = {
  ProjectsData: PropTypes.arrayOf(PropTypes.objectOf),
};

export default Projects;
