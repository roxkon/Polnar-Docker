import * as React from 'react';
import styled from 'styled-components';

import Facebook from '../../assets/icons/facebook.svg';
import Mail from '../../assets/icons/mail.svg';
import Map from '../../assets/icons/map.svg';
import Medium from '../../assets/icons/medium.svg';
import Phone from '../../assets/icons/phone.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Youtube from '../../assets/icons/youtube.svg'


const FooterDiv = styled.div`
    background-color: #292c2f;
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;

	padding: 55px 50px;
	margin-top: 80px;
`

const FooterLeft = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 40%;
`

const FooterRight = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 20%;
`

const FooterCenter = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 35%;
`

const FooterLinks = styled.p`
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
`
const FooterLinksItem = styled.a`
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
`

const FooterCompanyName = styled.p`
	color:  #8f9296;
	font-size: 14px;
	font-weight: normal;
    margin: 0;
`

const FooterCompanyAbout = styled.p`
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
`

const FooterIconA = styled.a`
width: 35px;
height: 35px;
cursor: pointer;
border-radius: 2px;
font-size: 20px;
color: #ffffff;
text-align: center;
line-height: 35px;
margin-right: 3px;
margin-bottom: 5px;
`

const FooterIcons = styled.div`
margin-top: 25px;
`

const Icon = styled.img`
height: 40px;
padding:6px;
background-color:  #33383b;
color: #ffffff;
font-size: 25px;
border-radius: 50%;
text-align: center;
line-height: 42px;
margin: 10px 15px;
vertical-align: middle;
`

const IconParagraph = styled.p`
display: inline-block;
color: #ffffff;
vertical-align: middle;
margin:0;
`

const Span = styled.span`
display:block;
font-weight: normal;
font-size:14px;
line-height:2;
`
const AboutSpan = styled.span`
display: block;
color:  #ffffff;
font-size: 14px;
font-weight: bold;
margin-bottom: 20px;
`


const Footer = () => (
    <FooterDiv>

        <FooterLeft>

            <h3>Company<span>logo</span></h3>

            <FooterLinks>
                <a href="#">Home</a>
                ·
        <FooterLinksItem href="#">Blog</FooterLinksItem>
                ·
        <FooterLinksItem href="#">Pricing</FooterLinksItem>
                ·
        <FooterLinksItem href="#">About</FooterLinksItem>
                ·
        <FooterLinksItem href="#">Faq</FooterLinksItem>
                ·
        <FooterLinksItem href="#">Contact</FooterLinksItem>
            </FooterLinks>

            <FooterCompanyName>Polnar &copy; 2018</FooterCompanyName>
        </FooterLeft>

        <FooterCenter>

            <div>
                <Icon src={Map}/>
                <IconParagraph><Span>Nawrot 144</Span> Łódź, Poland</IconParagraph>
            </div>

            <div>
            <Icon src={Phone}/>
                <IconParagraph>+48 555 123 456</IconParagraph>
            </div>

            <div>
            <Icon src={Mail}/>
                <IconParagraph><FooterLinksItem href="mailto:support@company.com">support@company.com</FooterLinksItem></IconParagraph>
            </div>

        </FooterCenter>

        <FooterRight>

            <FooterCompanyAbout>
                <AboutSpan>About the company</AboutSpan>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </FooterCompanyAbout>

            <FooterIcons>

                <FooterIconA href="#">  <Icon  src={Twitter}/></FooterIconA>
                <FooterIconA href="#">  <Icon src={Facebook}/></FooterIconA>
                <FooterIconA href="#">  <Icon src={Medium}/></FooterIconA>
                <FooterIconA href="#">  <Icon src={Youtube}/></FooterIconA>

            </FooterIcons>

        </FooterRight>

    </FooterDiv>

);

export default Footer;

