import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Check from '../../assets/icons/check.svg';
import IMG from '../../assets/images/professionalism.jpg'



const WelcomeThree = styled.div`
margin:-1px 0 0 0;
`
const Container = styled(Grid)`
  margin-top: 80px;
  z-index: 2
  `
const RowSection = styled(Row)`
width: 1170px;
padding: 15px 24px 6px;
color: rgba(0,0,0,0.65);
`

const MainTitle = styled.div`
margin: 0 0 0 0;
`
const H2 = styled.h2`
color: #000;
font-weight: 700;
  font-size: 42px;
  font-family: 'Raleway', sans-serif;
  color: #222222;
`
const WelcomeDetails = styled.div`
margin:-1px 0 0 0;
`

const Images = styled.img`
width: 100%;
`

const Detail = styled.div`
  color: #000;
  `

const P = styled.p`
  margin: 0px;
    padding: 0px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 27px;
`

const Ul = styled.ul`
margin: 28px 0 0 0;
list-style: none;
display: inline;
`

const Li = styled.li`
margin: 0 0 0 0;
line-height: 50px;


`
const DivIcon = styled.div`
width: 25px;
    height: 25px;
    float: left;
    border-radius: 25px;
    text-align: center;
    background-color: #292c2f;
    display: block;
    margin: 15px 10px 0 0;
   `

const Icon = styled.img`
height: 14px;
color: #ccc;
margin: 0px 0px 27px 0px;

`

const Span = styled.span`
font-family: 'Source Sans Pro',sans-serif;
`

const Goals = () => (
    <WelcomeThree>
        <Container>

            <RowSection>
                <Col md={12}>
                    <MainTitle>
                        <H2>Obiektywizm i recenzja</H2>
                        <P>Dzięki fachowej kadrze o wysokiej wiedzy wszelkie treści i informacje zamieszczane na O.P.B. PolNar będą obiektywnie prawdziwe, gdyż zostaną zweryfikowane w oparciu o kryteria dowodów naukowych i stan wiedzy w konkretnej dziedzinie, a w miarę potrzeb również zrecenzowane.</P>
                    </MainTitle>
                </Col>
            </RowSection>

            <WelcomeDetails>
                <RowSection>


                    <Col md={7}>
                        <Detail>

                            <P>Fachowa kadra ekspertów współpracująca przy projekcie zajmująca się:</P>
                            <Ul>
                                <Li><DivIcon><Icon src={Check} /></DivIcon><Span>doborem publikacji w panelach tematycznych</Span></Li>
                                <Li><DivIcon><Icon src={Check} /></DivIcon><Span>weryfikacją treści zamieszczanych przez zainteresowanych</Span></Li>
                                <Li><DivIcon><Icon src={Check} /></DivIcon><Span>redakcją paneli tematycznych</Span></Li>
                                <Li><DivIcon><Icon src={Check} /></DivIcon><Span>doradztwem w tematach związanych z konopiami</Span></Li>
                                <Li><DivIcon><Icon src={Check} /></DivIcon><Span>obiektywnym doborem treści informacji ogólnej rozpowszechnianej na poziome podstawowym</Span></Li>
                                <Li><DivIcon><Icon src={Check} /></DivIcon><Span>udzielaniem wszelkiego wsparcia dla zainteresowanych prowadzących badania wymagające opinii komisji bioetycznych </Span></Li>
                            </Ul>

                        </Detail>
                    </Col>


                    <Col md={5}>
                        <Images src={IMG} alt="" />
                    </Col>
                </RowSection>

            </WelcomeDetails>
        </Container>
    </WelcomeThree>
);

export default Goals;

