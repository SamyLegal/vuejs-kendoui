import axios from 'axios';

export function fetchItem() {
  return axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      return response.data;
    })
}
