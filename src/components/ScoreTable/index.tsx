import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ScoreTableApi from 'api/ScoreTableApi';

function ScoreTable() {
  return (
    <>
      <Row>
        <Col>
          <ScoreTableApi />
        </Col>
      </Row>
    </>
  );
}

export default ScoreTable;
