import axios from 'axios';

async function fetchData() {
  try {

    const response = await axios('https://us-east-1.aws.data.mongodb-api.com/app/data-chsij/endpoint/test');
     return response.data

  } catch (error) {
    console.error(error);
  }
}
export default fetchData