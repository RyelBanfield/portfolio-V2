import { Link } from 'react-router-dom';
import HTMLSVG from '../assets/images/HTML5.svg';
import CSSSVG from '../assets/images/CSS3.svg';
import SASSSVG from '../assets/images/Sass.svg';
import JavaScriptSVG from '../assets/images/JavaScript.svg';
import BootstrapSVG from '../assets/images/Bootstrap.svg';
import ReactSVG from '../assets/images/React.svg';
import ReduxSVG from '../assets/images/Redux.svg';
import RubySVG from '../assets/images/Ruby.svg';
import RubyOnRailsSVG from '../assets/images/Ruby_on_Rails.svg';
import SQLiteSVG from '../assets/images/SQLite.svg';
import PostgreSQLSVG from '../assets/images/PostgreSQL.svg';
import HerokuSVG from '../assets/images/Heroku.svg';
import NetlifySVG from '../assets/images/Netlify.svg';
import NodeSVG from '../assets/images/Node.svg';
import ExpressSVG from '../assets/images/Express.svg';
import MongoSVG from '../assets/images/MongoDB.svg';

const technologies = {
  love: [
    { name: 'JavaScript', src: JavaScriptSVG },
    { name: 'React', src: ReactSVG },
  ],
  know: [
    { name: 'HTML', src: HTMLSVG },
    { name: 'CSS', src: CSSSVG },
    { name: 'Sass', src: SASSSVG },
    { name: 'Bootstrap', src: BootstrapSVG },
    { name: 'Ruby', src: RubySVG },
    { name: 'Ruby on Rails', src: RubyOnRailsSVG },
    { name: 'SQLite', src: SQLiteSVG },
    { name: 'PostgreSQL', src: PostgreSQLSVG },
    { name: 'Redux', src: ReduxSVG },
    { name: 'Heroku', src: HerokuSVG },
    { name: 'Netlify', src: NetlifySVG },
  ],
  learning: [
    { name: 'NodeJs', src: NodeSVG },
    { name: 'Express', src: ExpressSVG },
    { name: 'Mongo', src: MongoSVG },
  ],
};

const Home = () => (
  <main className="home fade-in">
    <div className="header">
      <div className="image-div">
        <div className="image" />
      </div>
      <div className="intro">
        <h1>Ryel Banfield 👨‍💻</h1>
        <h2>Web Developer</h2>
        <p>Passionate about solving problems, seeing the world and working remotely.</p>
        <Link to="/projects" className="projects-btn">View My Work</Link>
      </div>
    </div>

    <div className="my-stack">
      <div className="stack-div">
        <h3 className="stack-header">What do I love working with?</h3>
        <ul className="stack-items">
          {technologies.love.map((technology) => (
            <li className="stack-item" key={technology.name}>
              <img className="stack-image" src={technology.src} alt={technology.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="stack-div">
        <h3 className="stack-header">What do I know how to work with?</h3>
        <ul className="stack-items">
          {technologies.know.map((technology) => (
            <li className="stack-item" key={technology.name}>
              <img className="stack-image" src={technology.src} alt={technology.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="stack-div">
        <h3 className="stack-header">What am I learning to work with?</h3>
        <ul className="stack-items">
          {technologies.learning.map((technology) => (
            <li className="stack-item" key={technology.name}>
              <img className="stack-image" src={technology.src} alt={technology.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
);

export default Home;
