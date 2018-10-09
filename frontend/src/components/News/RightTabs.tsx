import * as React from 'react';
import styled from 'styled-components';
import NewsItemRight from './NewsItemRight';
import Tab from './Tab';
import TabContainer from './TabContainer';




interface IState {
    index: number
    listData: ILocation[];
}

interface ILocation {
    id: number;
    href: string;
    title: string;
    avatar: string;
    description: string;
    content: string;
};


const RightBox = styled.div`
    border-bottom: 1px solid #ebedf0;
    padding: 0px 10px 50px;
    color: rgba(0,0,0,0.65);
    margin-top:70px;
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
            index: 0,
            listData: [
                {
                    id: 1,
                    avatar: 'A.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    id: 2,
                    avatar: 'B.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    id: 3,
                    avatar: 'C.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    id: 4,
                    avatar: 'A.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    id: 5,
                    avatar: 'B.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    id: 6,
                    avatar: 'C.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    id: 7,
                    avatar: 'A.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    id: 8,
                    avatar: 'B.jpg',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
            ],
        }
    }



    public render() {
        const { index, listData } = this.state;
        return (
            <RightBox>
                <H2>Popularne publikacje</H2>
                <TabContainer index={index} updateIndex={this.updateIndex}>
                    <Tab title="First">
                        <p>
                     <NewsItemRight  list={listData}/>
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