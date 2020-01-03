import React from 'react'
import { Typography } from '@material-ui/core'
import Typist from 'react-typist'
import Arrow from './arrow'

class Header extends React.Component {

    state = {
      index: 0,
    }

    onComplete = () => {
      if (this.state.index + 1 == 4) {
        this.setState({ index: 0 })
      }
      else {
        this.setState({ index: this.state.index + 1 })
      }
    }

    render () {

      const strings = ['Michael DeMarco','a dev-in-development','a first-year at UBC','excited to meet you!'];

      return <div className='header'>
        
        <div className='content-desktop'>
          <Typography variant='h1' className='title-text'>Hi, I'm 
          <Typist
            className="Typist"
            onTypingDone={this.onComplete}
            key={this.state.index}>
              <span>> { strings[this.state.index] }</span>
              <Typist.Backspace count={ strings[this.state.index].length } delay={1000}/>
          </Typist>
        </Typography>
        </div>
        
        <div className='content-mobile'>
          <Typography className='mobile-title' variant='h1'>Hi, I'm <br /> >Michael DeMarco<span className='blink'>|</span></Typography>
        </div>
          <Arrow></Arrow></div>
    }
  }

  export default Header