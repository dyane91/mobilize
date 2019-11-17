import axios from 'axios';

//Action types
const ALL_EVENTS = 'ALL EVENTS';
const SINGLE_EVENT = 'SINGLE EVENT';

//Action creator

const gotEvents = events => ({
  type: ALL_EVENTS,
  events
});

const gotSingleEvent = singleEvent => ({
  type: SINGLE_EVENT,
  singleEvent
});

//Initial state
const initialState = {
  events: [],
  singleEvent: {},
  pageNumber: 0
};

export const getEvents = (pageNumber) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`https://api.mobilize.us/v1/events?page=${pageNumber}&per_page=24`);
      dispatch(gotEvents(data));
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSingleEvent = (id) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`https://api.mobilize.us/v1/events/${id}`);
      dispatch(gotSingleEvent(data));
    } catch (error){
      console.log(error);
    }
  }
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ALL_EVENTS:
      return {...state, events: action.events}
    case SINGLE_EVENT:
      return {...state, singleEvent: action.singleEvent}
    default:
      return state
  }
}
