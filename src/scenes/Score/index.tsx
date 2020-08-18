import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ScoreTable from 'components/ScoreTable';
import { GlobalState } from 'store';
import { Link } from 'react-router-dom';

export default function Score() {
  const { name } = useSelector((state: GlobalState) => {
    return {
      ...state.loggedUser,
    };
  });

  return (
    <>
      <Container>
        <h2>Highest Score</h2>
        <ScoreTable />
        {name ? (
          <span>Vítej, {name}</span>
        ) : (
          <span>
            Pro hraní se musíte <Link to="/login">příhlásit</Link>.
          </span>
        )}
      </Container>
    </>
  );
}
