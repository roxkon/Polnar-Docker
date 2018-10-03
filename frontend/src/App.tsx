import * as React from 'react';

import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import Header from './components/HeaderNav';

import './App.css';
import IMG from './banner.jpg'

interface IState {
  content: string;
}

class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      content: 'Waiting for a response from Rails...',
    };
  }

  public async componentDidMount() {
    const response = await axios.get('http://localhost:3001/greetings/hello', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    this.setState(prevState => {
      return {
        ...prevState,
        content: response.data.content,
      }
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-main">
          <Carousel>
            <Carousel.Item>
              <img width={"100%"} alt="900x500" src={IMG} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={"100%"} height={500} alt="900x500" src={IMG} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={"100%"} height={500} alt="900x500" src={IMG} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>;
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default App;
