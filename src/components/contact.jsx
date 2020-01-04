import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import resume from './rawinfo'

// todo: add twitter link!

class Contact extends React.Component {
    render () {
      const contact = resume.contact
      return <div className='contact'>
        <a target="_blank" rel="noopener noreferrer" href={contact.github_url} className='socials gh'><GitHubIcon className='icons' /></a>
        <a target="_blank" rel="noopener noreferrer" href={contact.linkedin_url} className='socials ln'><LinkedInIcon className='icons' /></a>
        <a target="_blank" rel="noopener noreferrer" href={contact.instagram_url} className='socials ig'><InstagramIcon className='icons' /></a>
        <a target="_blank" rel="noopener noreferrer" href={contact.facebook_url} className='socials fb'><FacebookIcon className='icons' /></a>
        <a target="_blank" rel="noopener noreferrer" href={contact.twitter_url} className='socials tw'><TwitterIcon className='icons' /></a> 
        <a target="_blank" rel="noopener noreferrer" href={contact.youtube_urll} className='socials yt'><YouTubeIcon className='icons' /></a>
        <a target="_blank" rel="noopener noreferrer" href={contact.mail_url} className='socials em'><EmailIcon className='icons' /></a>
      </div>
    }
  }

  export default Contact

  /* 
  
github_url: "https://github.com/michaelfromyeg",
linkedin_url: "https://www.linkedin.com/in/michaelfromyeg/",
instagram_url: "https://www.instagram.com/michaelfromyeg/",
facebook_url: "https://www.facebook.com/michaelfromyeg",
youtube_url: "https://www.youtube.com/channel/UCohoNm6NqDAetXX6MiaV_RQ?view_as=subscriber",
mail_url: "mailto:michaelfromyeg@gmail.com",
phone: "(780) 680-9634",


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
  import YouTubeIcon from '@material-ui/icons/YouTube';
  import EmailIcon from '@material-ui/icons/Email';
  import PhoneIcon from '@material-ui/icons/Phone';
  import HomeIcon from '@material-ui/icons/Home';
  */