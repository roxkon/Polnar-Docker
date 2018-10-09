import * as React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Dropdown from './Dropdown';
import './header.css';


import LogInModal from './LogInModal';
import SignUpModal from './SignUpModal';



interface IState {
  lgShowSignIn?: boolean;
  lgShowSignUp?: boolean;
  lgOpenSignIn?: boolean;
  lgOpenSignUp?: boolean;
  location: ILocation[];
}

interface ILocation {
  id:number;
  key: string;
  selected: boolean;
  title: string;
};

interface IProps {
  onHide?: boolean;
}


class HeaderNav extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    this.state = {
      lgShowSignIn: false,
      lgShowSignUp: false,
      location: [
        {
          id: 0,
          key: 'location',
          selected: false,
          title: 'New York'
        },
        {
          id: 1,
          key: 'location',
          selected: false,
          title: 'Dublin'
        },
        {
          id: 2,
          key: 'location',
          selected: false,
          title: 'California'
          
        },
        {
          id: 3,
          key: 'location',
          selected: false,
          title: 'Istanbul'
        },
        {
          id: 4,
          key: 'location',
          selected: false,
          title: 'Izmir'
        },
        {
          id: 5,
          key: 'location',
          selected: false,
          title: 'Oslo'
        }
      ]
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
              <li><Dropdown
  title="Features"
  list={this.state.location}
/></li>
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
