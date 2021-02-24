import React from 'react'
import SocialIcon from './SocialIcon/SocialIcon'
import MenuFooter from './MenuFooter/MenuFooter'

const Footer = () => {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row footer-row">
              <MenuFooter/>
            <div class="footer-background">
              <div class="background"></div>
              <div class="copy">© 2021 Condé Nast</div>
            </div>            
              <SocialIcon/>            
          </div>
        </div>
      </footer>
    );
}

export default Footer

  