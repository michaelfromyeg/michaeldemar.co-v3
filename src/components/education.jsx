import React from 'react'
import { Typography } from '@material-ui/core'
import resume from './rawinfo'

class Education extends React.Component {
    render () {
      const education = resume.education.list
      return <div className='section'>
        <Typography variant='h2'>Education</Typography>
        {education.map(function(edu){
          return <div className='entry'>
              <Typography variant='h5'>{edu.institution}</Typography>
              <Typography variant='body1'>{edu.location}</Typography>
              <Typography variant='body1'>{edu.degree}</Typography>
              <Typography variant='body1'>{edu.grade}</Typography>
              <Typography variant='body1'>{edu.end_date}</Typography>
              <div className='technology-list'>{ edu.courses.map(function(course){
                return <div className='technology'>
                  <Typography variant='subtitle2'>{course}</Typography>
                </div>
              })}</div>
            </div>
        })}
      </div>
    }
  }

  export default Education