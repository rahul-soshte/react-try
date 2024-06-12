import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostList';
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:8000/posts');
  const resData = await response.json();
  console.log(resData)

  return resData.posts;
}