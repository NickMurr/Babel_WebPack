import { person, sayHello } from './lib';

// console.log(person);
// console.log(sayHello('Brad'));

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  return await response.json();
}

getPosts().then((posts) => {
  console.log(posts);
});
