import axios from "axios";

async function  getData(user_id) {
  const user1 = `https://jsonplaceholder.typicode.com/users/${user_id}`;
  const post1 = `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`;

  try {
    const user_response = await axios(user1);
    const post_response = await axios(post1);

    return { ...user_response.data, posts: post_response.data };
  } catch (error) {
    console.error(error);
  }
}

export default getData;
