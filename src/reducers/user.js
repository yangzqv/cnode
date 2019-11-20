const USER_STATE = {
  accesstoken: 'ff12442f-5de8-4b16-9d0c-4f953ae16a26',
}

export default function user(preState=USER_STATE, action) {
  switch(action.type) {
    default:
      return {...preState};
  }
}