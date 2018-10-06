import * as React from 'react';
import { Media } from 'react-bootstrap';
import styled from 'styled-components';

import IMG from '../../logo.svg'




interface ILocation {
    href: string;
    title: string;
    avatar: string;
    description: string;
    content: string;
};

interface IState {
    listData: ILocation[];

}

const Box = styled.div`
    border-bottom: 1px solid #ebedf0;
    padding: 42px 24px 50px;
    color: rgba(0, 0, 0, 0.65);
`

const H2 = styled.h2`
border-bottom: 1px solid #d3d6da;
color: rgba(0, 0, 0, 0.65);
padding-bottom: 14px;
`



class LeftNews extends React.Component<{}, IState>  {
    public constructor(props: {}) {
        super(props);
        this.state = {
            listData: [
                {
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
                {
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                    href: 'http://ant.design',
                    title: `ant design part`,
                },
            ],
        };
    }


    public render() {
        return (
            <Box>
                <H2>Latest News</H2>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={IMG} alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Media Heading</Media.Heading>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                            fringilla. Donec lacinia congue felis in faucibus.
      </p>
                    </Media.Body>
                </Media>
            </Box>
        )
    }


}



export default LeftNews;