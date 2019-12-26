import React from 'react'
import { Typography, List, ListItem } from '@material-ui/core'
import resume from './rawinfo'

class Projects extends React.Component {
    render () {
      const projects = resume.projects.list
      return <div className='section'>
        <Typography variant='h2'>Projects</Typography>
        { projects.map(function(pro){
            return <div className='entry'>
              <Typography variant='h5'>{pro.title} @ <a href={pro.github_url} className='company-url'>{pro.name}</a></Typography>
              <Typography variant='subtitle2'>{pro.location}—{pro.start_date} to {pro.end_date}</Typography>
              <List>{pro.description.map(function(bullet){
                return <ListItem><Typography variant='body1'>• {bullet}</Typography></ListItem>
              })}
              </List>
              <div className='technology-list'>{ pro.technologies.map(function(tech){
                return <div className='technology'>
                  <Typography variant='subtitle2'>{tech}</Typography>
                </div>
              })}</div>
            </div>
        })}
      </div>
    }
  }

  export default Projects