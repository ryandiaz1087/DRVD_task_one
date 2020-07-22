import React from 'react';
import useDimensionStore from '../../state/useDimensionStore';
import CheckerCell from './CheckerCell';
import styles from './CheckerRow.module.css';

const CheckerBoard = ({ even }) => {
  const { useDimension } = useDimensionStore();
  const { dimension } = useDimension();

  return (
    <div className={styles.checkerBoard}>
      {rowOfCells(dimension, even)}
    </div>
  );
}

function rowOfCells(dimension, even) {
  const board = [];
  const num = even === true ? 0 : 1
  for (let row = 1; row <= dimension; row++) {
    board.push(
    <div>
      <CheckerCell color={row % 2 !== num ? 'black' : 'white'} />
    </div>);
  }
  return board;
}

export default CheckerBoard;
