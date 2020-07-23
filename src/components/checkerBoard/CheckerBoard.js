import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useGameStore from '../../state/useGameStore';
import CheckerRow from './CheckerRow';
import styles from './CheckerBoard.module.css'

const CheckerBoard = () => {
  const { useGame } = useGameStore();
  const { dimension } = useGame();

  const board = [];
  for (let row = 1; row <= dimension; row++) {
    board.push(<CheckerRow key={uuidv4()} even={ row % 2 === 0 ? false : true} />)
  }
  return (
    <div className={styles.container}>
      {board}
    </div>
  );
}

export default CheckerBoard;
