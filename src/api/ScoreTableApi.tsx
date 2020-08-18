import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Row, Col } from 'react-bootstrap';

const HIGHSCORE_DATA = gql`
  query {
    allScores {
      score
      player {
        name
      }
    }
  }
`;

function ScoreTableApi() {
  const { loading, error, data } = useQuery(HIGHSCORE_DATA);

  if (loading) return <p>Načítám...</p>;
  if (error) return `<p>Error: ${error.message}</p>`;

  return data.allScores.length > 0 ? (
    data.allScores.map((currentScore, index) => (
      <Row>
        <Col>
          <span>{index + 1}</span>
        </Col>
        <Col>
          <span>{currentScore.player.name}</span>
        </Col>
        <Col>
          <span>{currentScore.score}</span>
        </Col>
      </Row>
    ))
  ) : (
    <Row>
      <Col>
        <span>Prozatím žádné skóre.</span>
      </Col>
    </Row>
  );
}

export default ScoreTableApi;
