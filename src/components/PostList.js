import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost  from "./NewPost";
import { useState } from "react";
function PostList(props) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
      <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author = "snoop dog"/>
      </ul>
      </>
      );
}

export default PostList;