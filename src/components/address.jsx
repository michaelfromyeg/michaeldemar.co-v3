import React from 'react'
import { Typography } from '@material-ui/core'
import resume from './rawinfo'
//import PhoneIcon from '@material-ui/icons/Phone';         <PhoneIcon /><Typography variant='body1'>(780) 680-9634</Typography>

class Address extends React.Component {
    render () {
      const address = resume.address
      return <div className='section'>
        <Typography variant='h2'>Address</Typography>
        <Typography variant="body1">{address.line1}</Typography>
        <Typography variant="body1">{address.line2}</Typography>
      </div>
    }
  }

  export default Address