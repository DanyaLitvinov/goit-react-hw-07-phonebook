export const pendingReducer = state => {
    state.isLoading = true;
  };
  
  export const fulfilledReducer = state => {
    state.isLoading = false;
    state.error = null;
  };
  
  export const rejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };