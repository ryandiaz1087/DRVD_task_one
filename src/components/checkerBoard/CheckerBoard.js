import React from 'react';
import useDimensionStore from '../../state/useDimensionStore';
import CheckerRow from './CheckerRow';
import styles from './CheckerBoard.module.css'

const CheckerBoard = () => {
  const { useDimension } = useDimensionStore();
  const { dimension } = useDimension();

  const board = [];
  for (let row = 1; row <= dimension; row++) {
    board.push(<CheckerRow key={Math.random() * 1000} even={ row % 2 === 0 ? false : true} />)
  }
  return (
    <div className={styles.container}>
      {board}
    </div>
  );
}

export default CheckerBoard;
