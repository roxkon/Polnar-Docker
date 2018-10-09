import axios from 'axios';
import * as React from 'react';

import Assumptions from '../../components/Assumptions';
import CarouselHeader from '../../components/CarouselHeader';
import Footer from '../../components/Footer';
import Goals from '../../components/Goals';
import Header from '../../components/HeaderNav';
import News from '../../components/News';
import Professionalism from '../../components/Professionalism';

import './App.css';





interface IState {
  content: string;
}

class Main extends React.Component<{}, IState> {
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
          <CarouselHeader />
          <News />
          <Goals />
          <Assumptions />
          <Professionalism />
          <Footer />
        </header>
        <div className="App-main">

          {this.state.content}
        </div>
      </div>
    );
  }
}

export default Main;
