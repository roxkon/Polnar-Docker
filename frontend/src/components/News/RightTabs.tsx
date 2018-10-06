import * as React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import  TabContainer  from './TabContainer';



interface IState {
    index: number
}

const RightBox = styled.div`
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0,0,0,0.65);
`

const H2 = styled.h2`
      border-bottom: 1px solid #d3d6da;
      color: rgba(0, 0, 0, 0.65);
      padding-bottom: 14px;
`    

class RightTabs extends React.Component<{}, IState> {
    public constructor(props: {}) {
        super(props);
        this.state = {
        index: 0
        };
      }

 
 
   public render() {
        const { index } = this.state;
        return (
            <RightBox>
                <H2>Top ❤️ News</H2>
                <TabContainer index={index} updateIndex={this.updateIndex}>
                    <Tab title="First">
                        <p>
                            Irure eiusmod minim esse ipsum ullamco in dolore in.
                            Tempor adipisicing proident in laboris est nulla magna.
                            In aliquip non magna qui officia non nostrud culpa.
                            Exercitation eiusmod laboris nulla cillum nisi.
                            Veniam dolore in nulla commodo proident nisi aliqua sunt.
                            Minim quis ullamco mollit ullamco adipisicing pariatur
                            culpa ad dolore aliqua ea.
              </p>
                    </Tab>
                    <Tab title="Second">
                        <p>
                            Esse officia nulla consequat pariatur laborum minim consequat
                            ipsum esse voluptate consequat. Et officia veniam aliquip amet.
                            Culpa reprehenderit esse nulla amet elit. Esse aliquip magna
                            dolore cillum. Aute occaecat cupidatat et enim cillum consectetur ea.
              </p>
                    </Tab>
                    <Tab title="Third">
                        <p>
                            Qui labore est adipisicing ea in officia sint aliqua ut
                            fugiat qui ut pariatur. Laborum veniam quis ex Lorem dolore
                            eiusmod. Sint amet ipsum nisi culpa cupidatat id elit magna
                            dolore sint sit officia aliqua.
              </p>
                    </Tab>
                </TabContainer>
            </RightBox>
        );
    }

   private updateIndex = (index: any) => {
        this.setState({ index });
    }
}

export default RightTabs;