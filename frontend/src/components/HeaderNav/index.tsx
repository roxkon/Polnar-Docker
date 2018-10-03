import * as React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import './header.css';
import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';


interface IState {
  lgShowSignIn?: boolean;
  lgShowSignUp?: boolean;
  lgOpenSignIn?: boolean;
  lgOpenSignUp?: boolean;
}

interface IProps {
  onHide?: boolean;
}


class HeaderNav extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    this.state = {
      lgShowSignIn: false,
      lgShowSignUp: false
    };

  }

  public lgOpenSignIn = (e: any): void => {
    this.setState({ lgShowSignIn: true })
  }

  public lgOpenSignUp = (e: any): void => {
    this.setState({ lgShowSignUp: true })
  }

  public render() {
    const lgCloseSignIn = () => this.setState({ lgShowSignIn: false })
    const lgCloseSignUp = () => this.setState({ lgShowSignUp: false })
    return (
      <div className="container clearfix">
        <div className="one-third column">

          <div className="logo">
            <a className="scroll" href="#wrapper"><h1>more<span>+</span></h1></a>
          </div>
        </div>
        <div className="two-thirds column">

          <nav id="mainNav">
            <a href="#" className="mobileBtn"><i className="icon-menu" /></a>

            <ul>
              <li><a className="scroll" href="#about">About us</a></li>
              <li><a className="scroll" href="#services">Services</a></li>
              <li><a className="scroll" href="#portfolio">Portfolio</a></li>
              <li><a className="scroll" href="#blog">BLog</a></li>
              <li><a className="scroll" href="#contact">Contact</a></li>
              <li>
                <ButtonToolbar>
                  <Button
                    bsClass="myButton"
                    onClick={this.lgOpenSignIn}>
                    Zaloguj!
                      </Button>
                  <Button
                    bsClass="myButton"
                    onClick={this.lgOpenSignUp}>
                    Rejestracja!
                      </Button>
                  <LogInModal show={this.state.lgShowSignIn} onHide={lgCloseSignIn} />
                  <SignUpModal show={this.state.lgShowSignUp} onHide={lgCloseSignUp} />
                </ButtonToolbar>
              </li>
              {/* <li><button className="myButton" bsStyle="primary" onClick={() => this.setState({ lgShow: true })}>sign in</button></li> */}
            </ul>

          </nav>


        </div>
      </div>

    );
  }
}

export default HeaderNav;
