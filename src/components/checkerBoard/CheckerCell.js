import React from 'react';


const CheckerCell = ({ color }) => {
  const styles ={
    content: '',
    width: '6rem',
    height: '6rem',
    backgroundColor: color === 'white' ? 'white' : 'black'
  }
  return (
    <div style={styles}>

    </div>
  );
}

export default CheckerCell;
