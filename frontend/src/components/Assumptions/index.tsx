import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Twitter from '../../assets/icons/twitter.svg';
import Item from './Item';


const Main = styled.div`
color:#000;
margin-bottom: 40px;
`

const H2 = styled.h2`
font-family: 'Raleway',sans-serif !important;
text-align: center;
margin-top: 50px;
margin-bottom: 30px;
font-weight: 600;
font-size: 42px;

`

const Assumptions = () => (

    <Grid>
        <Row className="show-grid">
            <Col md={12}>
                <Main>
                    <H2><span>Założenia</span> Portalu</H2>
                    <p>
                        Baza szeroko rozumianej wiedzy na tematy związane z konopiami pogrupowana w przejrzyste panele tematyczne m.in.:
</p>
                </Main>
            </Col>

            <Item icon={Twitter} />
            <Item icon={Twitter} />
            <Item icon={Twitter} />
            <Item icon={Twitter} />
            <Item icon={Twitter} />
            <Item icon={Twitter} />

        </Row>
    </Grid>


);

export default Assumptions;

