import React from 'react'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'

class Navbar extends React.Component {
    render() {
        return (
            <AppBar position="sticky" className="appbar">
                <Toolbar>
                    <Typography variant="h6">Education</Typography>
                    <Typography variant="h6">Experience</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar