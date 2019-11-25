
const initialState = "Notification"

export const setNotification = (value) => {
  return {type:'SET_NOTIFICATION', notification:value};
};

export const clearNotification = (value) => {
  return {type:'CLEAR'};
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_NOTIFICATION':
      return action.notification;
    case 'CLEAR':
      return '';
  };
  return state;
}

export default reducer;