import makeStore from './makeStore';

const initialState = {
  dimension: 8,
}

const dimensionReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_DIMENSION':
      return {
        ...state,
        dimension: action.dimension,
      }
    default:
      return state;
  }
}

// Creating a 'Dimension' Store with custom hook
const [
  DimensionProvider,
  useDimensionDispatch,
  useDimension,
] = makeStore(dimensionReducer, initialState);

export default () => ({ DimensionProvider, useDimensionDispatch, useDimension });
