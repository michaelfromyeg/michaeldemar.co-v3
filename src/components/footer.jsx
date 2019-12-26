import React from 'react'
import { Typography } from '@material-ui/core'
import Contact from './contact'

class Footer extends React.Component {
    render () {
      return <div className='section'>
          <footer>
            <Typography variant='body1' className='footer-text'>© Michael DeMarco 2019</Typography>
            <Contact></Contact>
        </footer>
      </div>
    }
  }

  export default Footer