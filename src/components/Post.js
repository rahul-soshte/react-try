const names = ["Suppandi", "Tantri the Mantri"]

function Post() {
  
  const chosenName = Math.random() > 0.5? names[0]: names[1];

  return (
      <div className="Post">
        <p>{chosenName}</p>
        <p>Hello I am Rahul Soshte</p>
      </div>
    );
  }
  
  export default Post;