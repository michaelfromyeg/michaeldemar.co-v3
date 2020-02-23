import React from 'react'
import Header from './components/header'
//import Contact from './components/contact'
import Sidebar from './components/sidebar'
import Main from './components/main'
//import Navbar from './components/navbar'
import Footer from './components/footer'
import './styles.css'
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core'
import theme from './components/theme'
import ReactGA from 'react-ga'

const trackingID = 'UA-123146160-1'
ReactGA.initialize(trackingID)


class Site extends React.Component {
  render() {
    ReactGA.event({
      category:'User',
      action:'Visit homepage'
    })
    let orig_thm = theme
    const thm = responsiveFontSizes(orig_thm);
    return <div className='router'>
      <div className='content'>
        <ThemeProvider theme={thm}>
          <div className='site'>
            <Header></Header>
              <div className="wrapper">
                <Main></Main>
                <Sidebar></Sidebar>
                <Footer></Footer>
              </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  }
}

export default Site
