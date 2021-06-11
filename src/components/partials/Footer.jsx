import { Container } from '@material-ui/core'
import React from 'react'
import Typography from "@material-ui/core/Typography";

function Footer() {
    return (
        <footer>
        <Container maxWidth={false} className='footer' >
        <Typography variant="body2" gutterBottom className='footer-text' >
            Made with 🎧 by Keyjey101 © 2021
          </Typography>
          
        </Container>
            
        </footer>
    )
}

export default Footer
