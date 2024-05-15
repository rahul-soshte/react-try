const names = ["Suppandi", "Tantri the Mantri"]

function Post(props) {
  
  const chosenName = Math.random() > 0.5? names[0]: names[1];

  return (
      <div className="Post">
        <p>{props.author}</p>
        <p>{chosenName}</p>
      </div>
    );
  }
  
  export default Post;