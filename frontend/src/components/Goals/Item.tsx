import * as React from 'react';
import styled from 'styled-components';
import Twitter from '../../assets/icons/twitter.svg';


const ServiceSec = styled.div`
  margin: 0 0 55px 0;
  float: left;
  `

const ServiceIcon = styled.div`
width: 96px;
    height: 96px;
    float: left;
    border-radius: 7px;
    text-align: center;
    background-color: #292c2f;
   `

const Icon = styled.img`
   color: #ccc;  
   height:40px;
   text-shadow:0 5px 0 rgba(0, 0, 0, 0.19);
   margin: 25px 0 0 27px;  
   display: block;
   `

const Detail = styled.div`
  float: right;  
  width: 78%; 
  margin:-5px 0 0 0;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  `

const H5 = styled.h5`
font-weight: 700;
font-size: 24px;
font-family: 'Raleway', sans-serif;
`

const P = styled.p`
margin: 0 0 10px;
font-weight: 400;
font-family: Pangram,Avenir,Helvetica,sans-serif;
`


const Item = () => (
                <ServiceSec>
                    <ServiceIcon>
                        <Icon src={Twitter} />
                    </ServiceIcon>

                    <Detail>
                        <H5>Emergency Services</H5>
                        <P>If you need a doctor for to consectetuer Lorem ipsum dolor, consectetur adipiscing elit Lorem ipsum dolor, consectetur  Ut volutpat eros.</P>
                    </Detail>
                </ServiceSec>
);

export default Item;

