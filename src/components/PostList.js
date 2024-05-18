import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost  from "./NewPost";

function PostList(props) {

    return (
      <>
        <NewPost />
        <ul className={classes.posts}>
          <Post author = "tom brady"/>
          <Post author = "snoop dog"/>
        </ul>
      </>
      );
}

export default PostList;