import React from 'react'
import { Typography } from '@material-ui/core'
import Typist from 'react-typist'
import Arrow from './arrow'
import logosvg from '../assets/mjd-logo-white.svg'

class Header extends React.Component {

    state = {
      index: 0,
    }

    onComplete = () => {
      if (this.state.index + 1 === 4) {
        this.setState({ index: 0 })
      }
      else {
        this.setState({ index: this.state.index + 1 })
      }
    }

    render () {

      const strings = ['Michael James DeMarco','an aspiring software developer','a first-year UBC student','excited to meet you!'];

      return <div className='header'>
        <div className='content-desktop'>
          <img src={logosvg} alt="MJD logo" className='bg-logo-desktop' />
        </div>
        <div className='content-mobile'>
          <img src={logosvg} alt="MJD logo" className='bg-logo-mobile' />
        </div>
          <Typography variant='h2' className='title-text'>Hi, I'm 
          <Typist
            className="Typist"
            onTypingDone={this.onComplete}
            stdTypingDelay="0"
            key={this.state.index}>
              <span>>{ strings[this.state.index]}</span>
              <Typist.Backspace count={ strings[this.state.index].length } delay={2500}/>
          </Typist>
        </Typography>
          <Arrow></Arrow>
      </div>
    }
  }

  export default Header