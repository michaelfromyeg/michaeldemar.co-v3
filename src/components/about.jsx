import React from 'react';
import { Typography } from '@material-ui/core';
import headshot from '../assets/headshot.png';
import actual_resume from '../assets/resume.pdf'
import Contact from './contact';

class About extends React.Component {
    render () {
      const resume = <a className="resume" href={actual_resume} target="_blank" rel="noopener noreferrer"> resume</a>;
      return <div className="section">
          <Typography variant='h2'>About</Typography>
          <Typography variant="body1" className='bio-text'>
          Hi there! My name is Michael DeMarco and I’m a first-year student at UBC;
          I'm currently pursuing a degree in Computer Science and Mathematics.
          I’m passionate about developing products and solutions that people get excited about.
          My experience is primarily in web development, with a focus on the backend.
          I’m originally from Edmonton, AB, and in my spare time (which there’s not much of) 
          I like to read, make music, and play soccer. Feel free to download my  
          {resume} or follow any of the social links to learn more about me.</Typography>
          <img className='headshot' alt="Headshot of Michael" src={headshot}/>
      </div>
    }
  }

  export default About