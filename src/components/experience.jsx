import React from 'react'
import { Typography, List, ListItem } from '@material-ui/core'
import resume from './rawinfo'

class Experience extends React.Component {

    render () {
      const experiences = resume.experience.list
      return <div className="section">
        <Typography variant='h2'>Experience</Typography> 
        { experiences.map(function(exp){
            return <div className='entry'>
              <Typography variant='h5'>{exp.title} @ <a target="_blank" className='company-url' href={exp.company_url}>{exp.company}</a></Typography>
              <Typography variant='subtitle2'>{exp.location}—{exp.start_date} to {exp.end_date}</Typography>
              <List>{exp.description.map(function(bullet){
                return <ListItem><Typography variant='body1'>• {bullet}</Typography></ListItem>
              })}
              </List>
              <div className='technology-list'>{ exp.technologies.map(function(tech){
                return <div className='technology'>
                  <Typography variant='subtitle2'>{tech}</Typography>
                </div>
              })}</div>
            </div>
        })}
      </div>
    }
  }

  export default Experience