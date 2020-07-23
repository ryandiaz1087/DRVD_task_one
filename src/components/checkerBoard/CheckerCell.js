import React from 'react';
import styles from './CheckerCell.module.css';

const CheckerCell = ({ color }) => {
  const doesHavePiece = true; // This will soon be in 'Dimension State'
  const cellStyles ={
    content: '',
    width: '6rem',
    height: '6rem',
    backgroundColor: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  let checkerCellToRender = (
    <div style={cellStyles} />
  );

  if (doesHavePiece === true) {
    checkerCellToRender = (
      <div style={cellStyles}>
        <button className={styles.btn}>
          <div className={styles.piece} />
        </button>
      </div>
    )
  }

  return checkerCellToRender;
}

export default CheckerCell;
