import * as React from 'react';
import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import NewsItem from './NewsItem';






interface ILocation {
    id: number;
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
    padding-bottom: 60px;
    margin-top: 70px;
    color: rgba(0, 0, 0, 0.65);
`

const H2 = styled.h2`
border-bottom: 1px solid #d3d6da;
color: rgba(0, 0, 0, 0.65);
padding-bottom: 14px;
`

const Media = styled.div`

`

const Item = styled(Pagination.Item)`
border-radius: 20px
`

class LeftNews extends React.Component<{}, IState>  {
    public constructor(props: {}) {
        super(props);
        this.state = {
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
            ],
        };
    }


    public render() {


        const listData = this.state.listData
        return (
            <Box>
                <H2>Ostatnie publikacje</H2>
                <Media>
                        <NewsItem list={listData} />
                </Media>
                <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Item>{1}</Item>
  <Pagination.Ellipsis />

  <Item>{10}</Item>
  <Item>{11}</Item>
  <Item active={true}>{12}</Item>
  <Item>{13}</Item>
  <Item disabled={true}>{14}</Item>

  <Pagination.Ellipsis />
  <Item>{20}</Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>;
            </Box >
        )
    }
}



export default LeftNews;