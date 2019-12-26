import React from 'react'
import Education from './education'
import Skills from './skills'
import Awards from './awards'
import Address from './address'

class Sidebar extends React.Component {
    render () {
      return <div className='sidebar'>
        <Education></Education>
        <Skills></Skills>
        <Awards></Awards>
        <Address></Address>
      </div>
    }
  }

  export default Sidebar
