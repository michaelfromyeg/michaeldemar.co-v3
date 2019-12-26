import React from 'react'
import Experience from './experience'
import Projects from './projects'
import Activities from './activities'
import About from './about'

class Main extends React.Component {
    render () {
      return <div className='main'>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Activities></Activities>
      </div>
    }
  }

  export default Main
