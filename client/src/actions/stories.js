import axios from 'axios';

export const STORIES = 'STORIES';
export const UPDATE_STORY = 'UPDATE_STORY';
export const ADD_STORY = 'ADD_STORY';
export const DELETE_STORY = 'DELETE_STORY';


export const getStories = () => {
  return (dispatch) => {
    axios.get('/api/stories')
      .then( res => dispatch({ type: STORIES, stories: res.data, headers: res.headers }))
  }
}

export const updateStory = (story) => {
  return (dispatch) => {
    axios.put(`/api/stories/${story.id}`, {story})
      .then( res => dispatch({ type: UPDATE_STORY, story: res.data, headers: res.headers }))
  }
}

export const addStory = (story) => {
  return (dispatch) => {
    axios.post('/api/stories', story )
      .then( res => dispatch({ type: ADD_STORY, story: res.data, headers: res.headers })) 
  }
}

export const deleteStory = (id) => {
  return (dispatch) => {
    axios.delete(`/api/stories/${id}`)
      .then( res => dispatch({ type: DELETE_STORY, id, headers: res.headers }))
  }
}