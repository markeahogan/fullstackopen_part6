
const initialState = "";

export const setFilter = (value) => {
  return {type:'SET_FILTER', value};
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_FILTER':
      return action.value;
  };
  return state;
}

export default reducer;