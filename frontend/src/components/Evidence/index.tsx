import * as React from 'react';
import styled from 'styled-components';
import ImagesDNA from '../../assets/images/dna2.jpg'


const Background = styled.div`
background: url(${ImagesDNA}) no-repeat fixed;
background-size: 100%;
height: 370px;
position: relative;
`

const BlackOverlay = styled.div`
background: rgba(19, 19, 19, 0.51);
width: 100%;
height: 100%;
`

const Title = styled.h2`
color: #fff;
text-align: center;
padding-top: 50px;
padding-bottom: 20px;
font-weight: 600;
font-size: 42px;
font-family: 'Raleway',sans-serif;
`



const P = styled.p`
font-family: Pangram,Avenir,Helvetica,sans-serif;
color: #fff;
font-size: 20px;
text-align: center;
width: 1170px;
margin: 0 auto;
}
`

const Evidence = () => (
    <Background>
    <BlackOverlay>
        <Title>Jawność</Title>
        <P>
            Dzięki prowadzonemu periodykowi Index Scientia Cannabis O.P.B. PolNar jest w stanie zaoferować możliwość opublikowania wyników badań, artykułów naukowych i badawczych, rozpowszechnienia hipotez badawczych i naukowych, a przez to rozpowszechnianie koncepcji i pomysłów do jak najszerszego grona odbiorców zarówno przez czasopismo jak i przez informację ogólną na stronie projektu.
    </P>
    </BlackOverlay>
    </Background>

);

export default Evidence;

