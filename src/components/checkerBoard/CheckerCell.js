import React from 'react';


const CheckerCell = ({ color }) => {
  const styles ={
    content: '',
    width: '6rem',
    height: '6rem',
    backgroundColor: color,
  }
  return (
    <div style={styles} />
  );
}

export default CheckerCell;
