import React from 'react';
const Square = ({ value, onClick, isWinningCombination }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningCombination ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      } `}
    >
      {value}
    </button>
  );
};

export default Square;
