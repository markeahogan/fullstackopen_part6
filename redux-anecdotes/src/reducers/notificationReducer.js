
const initialState = "Notification"

export const setNotification = (value) => {
  return {type:'SET_NOTIFICATION', notification:value};
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_NOTIFICATION':
      return action.notification;
  };
  return state;
}

export default reducer;