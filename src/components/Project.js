import PropTypes from 'prop-types';

const Project = ({ ProjectData }) => (
  <div className="project">
    <img className="screenshot" src={ProjectData.screenshotUrl} alt={ProjectData.name} />
    <div className="project-info">
      <div className="info">
        <h2>{ProjectData.name}</h2>
        <p>{ProjectData.description}</p>
      </div>
      <div className="project-links">
        <a className="btn" href={ProjectData.url} target="_blank" rel="noreferrer">View Code</a>
        <a className="btn" href={ProjectData.homepageUrl}>View Live Demo</a>
      </div>
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
