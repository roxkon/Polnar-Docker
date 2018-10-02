import * as React from 'react';

import './header.css';

class HeaderNav extends React.Component {
    public render() {
        return (
          <div className="container clearfix">
          <div className="one-third column">
     
            <div className="logo">
            <a className="scroll" href="#wrapper"><h1>more<span>+</span></h1></a>
            </div>
          </div>
          
          
            <div className="two-thirds column">
        
                  <nav id="mainNav">
                    <a href="#" className="mobileBtn"><i className="icon-menu"/></a>
    
                  <ul>
                    <li><a className="scroll" href="#about">About us</a></li>
                    <li><a className="scroll" href="#services">Services</a></li>
                    <li><a className="scroll" href="#portfolio">Portfolio</a></li>
                    <li><a className="scroll" href="#blog">BLog</a></li>
                    <li><a className="scroll" href="#contact">Contact</a></li>
    
                  </ul>
    
                  </nav>
              
      
            </div>
          </div>
       
        );
      }
}

export default HeaderNav;
