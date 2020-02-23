import React from 'react'
import { Typography, List, ListItem } from '@material-ui/core'
import resume from './rawinfo'

class Awards extends React.Component {
    render () {
      const awards = resume.awards.list
      return <div className='section'>
        <Typography variant='h2'>Awards</Typography>
        { awards.map(function(awd){
          return <div className="entry">
            <Typography variant='body1'><strong>{awd.name}</strong> @ <a target="_blank" rel="noopener noreferrer" className='company-url' href={awd.url}>{awd.organization}</a></Typography>
            <Typography variant='body1'>{awd.date}</Typography>
            <List>
                <ListItem><Typography variant='body1'>• {awd.details}</Typography></ListItem>
            </List>
          </div>
        })}
      </div>
    }
    
  }

  export default Awards