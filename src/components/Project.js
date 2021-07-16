import PropTypes from 'prop-types';

const Project = ({ ProjectData }) => (
  <div className="project">
    <p>{ProjectData.name}</p>
    <p>{ProjectData.description}</p>
  </div>
);

Project.defaultProps = {
  ProjectData: {},
};

Project.propTypes = {
  ProjectData: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Project;
