import * as React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const ServiceSec = styled.div`
  margin: 0 0 55px 0;
  float: left;
  `

const ServiceIcon = styled.div`
width: 40px;
    height: 40px;
    float: left;
    border-radius: 7px;
    text-align: center;
    background-color: #292c2f;
   `

const Icon = styled.img`
   color: #ccc;  
   height:20px;
   text-shadow:0 5px 0 rgba(0, 0, 0, 0.19);
   margin: 10px 0 0 9px;  
   display: block;
   `

const Detail = styled.div`
  float: right;  
  width: 83%; 
  margin:-5px 0 0 0;
  color: #ccc;
  `

const H5 = styled.h5`
font-weight: 700;
font-size: 24px;
color: #726464;
font-family: 'Raleway', sans-serif;
`

const P = styled.p`
color: #726464;
`

const Item = (props) => (
    <Col xs={6} md={4}>
        <ServiceSec>
            <ServiceIcon>
                <Icon src={props.icon} />
            </ServiceIcon>
            <Detail>
                <H5>Emergency Services</H5>
                <P>If you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing elit Lorem ipsum dolor, consectetur  Ut volutpat eros.</P>
            </Detail>
        </ServiceSec>

    </Col>
);

export default Item;

