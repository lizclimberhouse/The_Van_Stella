import axios from 'axios';

export const STORIES = 'STORIES';
export const UPDATE_STORY = 'UPDATE_STORY';


export const getStories = () => {
  return (dispatch) => {
    axios.get('/api/stories')
      .then( res => dispatch({ type: STORIES, stories: res.data, headers: res.headers }))
  }
}

export const updateStory = (story) => {
  console.log(story)
  return (dispatch) => {
    axios.put(`/api/stories/${story.id}`, {story})
      .then( res => dispatch({ type: UPDATE_STORY, story: res.data, headers: res.headers }))
  }
}

export const addStory = (story) => {

}

export const deleteStory = (id) => {

}