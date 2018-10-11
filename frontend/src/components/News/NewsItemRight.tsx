import * as React from 'react';
import styled from 'styled-components';


interface IProps {
    list: any;

}

const Box = styled.div`
height: 100px;
`

const Title = styled.p`
font-size: 14px;
font-weight: 600;
`

const StyledIMG = styled.div`
  margin: 0 15px 0 0;
  float: left;
`;

const MediaStyled = styled.div`
color: #ff8600;
margin-top: 10px;
margin-bottom: 10px;
font-size: 10px;
text-transform: uppercase;
`


const NewsItemRight = (props: IProps) => {
    const list = props.list;
    return (
        list.map((item: any) => (
            <Box key={item.id}>

                <StyledIMG>
                    <img width={140} height={80} src={require(`./SamplePhoto/${item.avatar}`)} alt="thumbnail" />
                </StyledIMG>
                <MediaStyled key={item.id}>{item.title}</MediaStyled>
                <Title>{item.description}</Title>
                <h6>
                    <em>By  </em>
                    <a href="/authors/jordana-cepelewicz/" data-reactid="405">
                        <span>Jordana Cepelewicz</span>
                    </a>
                </h6>
            </Box>
        ))
    )
}

export default NewsItemRight;