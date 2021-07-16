import PropTypes from 'prop-types';

const Project = ({ ProjectData }) => (
  <>
    <p>{ProjectData.name}</p>
  </>
);

Project.defaultProps = {
  ProjectData: {},
};

Project.propTypes = {
  ProjectData: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Project;
