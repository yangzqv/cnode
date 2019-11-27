const USER_STATE = {
  accesstoken: '6a6f9c7f-f282-4e5b-8825-efc52a8d6eb8',
}

export default function user(preState=USER_STATE, action) {
  switch(action.type) {
    default:
      return {...preState};
  }
}