import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ImagesDNA from '../../assets/images/dna.jpg'
import Item from './Item';

const Background = styled.div`
background: url(${ImagesDNA}) no-repeat fixed;
background-size: 100%;
height: 425px;
position: relative;
`

const BlackOverlay = styled.div`
background: rgba(19, 19, 19, 0.51);
width: 100%;
height: 100%;
`

const Container = styled(Grid)`
  margin-top: 80px;
  z-index: 2
  `
const RowSection = styled(Row)`
width: 1170px;
padding: 15px 24px 50px;
color: rgba(0,0,0,0.65);
`

const Title = styled.h2`
font-weight: 600;
color: #fff;
text-align: center;
font-size: 42px;
font-family: 'Raleway',sans-serif !important;
margin-bottom: 30px;
`



const Goals = () => (
    <Background>
        <BlackOverlay>
    <Container>
        <RowSection>
            <Title>Nasza Misja</Title>
            <Col md={6} mdPush={6}>
           <Item />
           <Item />
            </Col>
            <Col md={6} mdPull={6}>
            <Item />
           <Item />
            </Col>
        </RowSection>
    </Container>
    </BlackOverlay>
    </Background>
);

export default Goals;

