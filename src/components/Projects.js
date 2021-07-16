import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ ProjectsData }) => (
  <div className="projects-container">
    {ProjectsData.map((project) => (
      <Project ProjectData={project} key={project.name} />
    ))}
  </div>
);

Projects.defaultProps = {
  ProjectsData: [],
};

Projects.propTypes = {
  ProjectsData: PropTypes.arrayOf(PropTypes.objectOf),
};

export default Projects;
