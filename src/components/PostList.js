import Post from "./Post";
import classes from "./PostList.module.css";

function PostList(props) {

    return (
        <ul className={classes.posts}>
          <Post author = "tom brady"/>
          <Post author = "snoop dog"/>
        </ul>
      );
}

export default PostList;