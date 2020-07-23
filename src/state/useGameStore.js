import makeStore from './makeStore';

function buildBrandNewGame(size) {
  const checkerBoard = {}
  let checkerBoardRow;

  for (let row = 1; row <= size; row++) {
    checkerBoardRow = [];
    for(let col = 1; col <= size; col++) {
      if (row === 1 || row === 2 || row === 7 || row === 8) {
        checkerBoardRow.push(true);
      } else {
        checkerBoardRow.push(false);
      }
    }

    checkerBoard[row] = checkerBoardRow;
  }

  return checkerBoard;
}

const initialState = {
  dimension: 8,
  checkerBoard: buildBrandNewGame(8),
}

const gameReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_DIMENSION':
      return {
        ...state,
        dimension: action.dimension,
      };
    default:
      return state;
  }
}

// Creating a 'Dimension' Store with custom hook
const [
  GameProvider,
  useGameDispatch,
  useGame,
] = makeStore(gameReducer, initialState);

export default () => ({ GameProvider, useGameDispatch, useGame });
