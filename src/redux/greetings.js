const GET_DATA_FROM_API = 'hello-rails-react/greeting/GET_DATA_FROM_API';
const initialState = [];

export const getDataFromApi = () => (async (dispatch) => {
  const response = await fetch('http://localhost:3000/v1/greetings');
  const responseData = await response.json();
  const greetingMsg = responseData.message

  dispatch({
    type: GET_DATA_FROM_API,
    payload: greetingMsg,
  });

});

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_FROM_API:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
