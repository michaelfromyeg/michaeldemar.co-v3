import React from 'react';
import { Typography } from '@material-ui/core';
import resume from './rawinfo';
import headshot from '../assets/headshot.png';
import actual_resume from '../assets/resume.pdf'

class About extends React.Component {
    render () {
      const bio = resume.bio
      return <div className='section'>
        <Typography variant='h2'>About</Typography>
        <Typography variant="body1" className='bio-text'>{bio} <a className="resume" href={actual_resume} target="_blank">Resume.</a></Typography>
        
        <img className='headshot' src={headshot}/>
      </div>
    }
  }

  export default About