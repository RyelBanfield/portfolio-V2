import PropTypes from 'prop-types';

// Create a card component that will be used to render a single project

const Project = ({ ProjectData }) => (
  <div className="project">
    <img className="screenshot" src={ProjectData.screenshotUrl} alt={ProjectData.name} />
    <div className="project-name">
      <h2>{ProjectData.name}</h2>
    </div>
  </div>
);

Project.defaultProps = {
  ProjectData: {},
};

Project.propTypes = {
  ProjectData: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    homepageUrl: PropTypes.string,
    screenshotUrl: PropTypes.string,
  }),
};

export default Project;
