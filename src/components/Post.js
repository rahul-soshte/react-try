import classes from './Post.module.css'

const names = ["Suppandi", "Tantri the Mantri"]

function Post(props) {
  
  const chosenName = Math.random() > 0.5? names[0]: names[1];

  return (
      <div className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{chosenName}</p>
      </div>
    );
  }
  
  export default Post;