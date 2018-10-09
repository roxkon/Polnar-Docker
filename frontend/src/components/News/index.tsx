import * as React from 'react';
import {Col, Grid, Row } from 'react-bootstrap';
import LeftNews from './LeftNews';
import RightTabs from './RightTabs';


class News extends React.Component {

    public render() {
        return(
            <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <LeftNews/>
    </Col>
    <Col xs={6} md={4}>
    <RightTabs />
    </Col>
  </Row>
</Grid>
        )
    }

}

export default News;
