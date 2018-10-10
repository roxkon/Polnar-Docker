import * as React from 'react';
import styled from 'styled-components';

interface Iprops {
    title: string;
    img: string;
}

const BackgroundDiv = styled.div`
display: table;
margin: 0 auto;
height:150px;
`
const InnerDiv = styled.div`
display: table-cell;
vertical-align: middle;
text-align: center;
`

const IMG = styled.img`
display: inline-block;
    text-align: left;
    background: #fff;
    margin : 0 auto;
`


const Item = (props: Iprops) => (
    <BackgroundDiv>
    <h3>{props.title}</h3>
    <InnerDiv>
    <IMG width={250} src={require(`../../assets/logotypes/${props.img}`)} alt="thumbnail" />
    </InnerDiv>
  </BackgroundDiv>

);

export default Item;

