import React from 'react'
import { Typography } from '@material-ui/core'
import resume from './rawinfo'

class Skills extends React.Component {
    render () {
      const languages = resume.skills.languages
      const frameworks = resume.skills.frameworks
      const tools = resume.skills.tools
      return <div className='section'>
        <Typography variant='h2'>Skills</Typography>
        {languages.map(function(lng){
          return <div className='technology'><Typography variant='body1'>{lng}</Typography></div>
        })}
        <br />
        {frameworks.map(function(fme){
          return <div className='technology'><Typography variant='body1'>{fme}</Typography></div>
        })}
        <br />
        {tools.map(function(tol){
          return <div className='technology'><Typography variant='body1'>{tol}</Typography></div>
        })}
      </div>
    }
  }

  export default Skills