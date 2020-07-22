import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useDimensionStore from '../../state/useDimensionStore';
import CheckerCell from './CheckerCell';
import styles from './CheckerRow.module.css';

const CheckerRow = ({ even }) => {
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
    <div key={uuidv4()}>
      <CheckerCell color={row % 2 !== num ? 'black' : 'white'} />
    </div>);
  }
  return board;
}

export default CheckerRow;
