import axios from 'axios';

export const STORIES = 'STORIES';
export const UPDATESTORY = 'UPDATESTORY';


export const getStories = () => {
  return (dispatch) => {
    axios.get('/api/stories')
      .then( res => dispatch({ type: STORIES, stories: res.data, headers: res.headers }))
  }
}

export const updateStory = (story) => {
  return (dispatch) => {
    axios.post(`/api/story/${story.id}`, {story})
      .then( res => dispatch({ type: UPDATESTORY, story: res.data, headers: res.headers }))
  }
}

export const addStory = (story) => {

}

export const deleteStory = (id) => {

}