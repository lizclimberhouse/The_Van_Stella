import axios from 'axios';

export const STORIES = 'STORIES';

export const getStories = () => {
  return (dispatch) => {
    axios.get('/api/stories')
      .then( res => dispatch({ type: STORIES, stories: res.data, headers: res.headers }))
  }
}

