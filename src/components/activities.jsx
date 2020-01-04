import React from 'react'
import { Typography, List, ListItem } from '@material-ui/core'
import resume from './rawinfo'

class Activities extends React.Component {
    render () {
      const activities = resume.activities.list
      return <div className='section'>
        <Typography variant='h2'>Activities</Typography>
         { activities.map(function(act){
            return <div className='entry'>
              <Typography variant='h5'>{act.title} @ {act.organization}</Typography>
              <Typography variant='subtitle2'>{act.location}—{act.start_date} to {act.end_date}</Typography>
              <List>{act.description.map(function(bullet){
                return <ListItem><Typography variant='body1'>• {bullet}</Typography></ListItem>
              })}
              </List>
              <div className='technology-list'>{ act.skills.map(function(skill){
                return <div className='technology'>
                  <Typography variant='subtitle2'>{skill}</Typography>
                </div>
              })}</div>
            </div>
        })}
      </div>
    }
  }

  export default Activities