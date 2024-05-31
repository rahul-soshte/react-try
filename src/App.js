import './App.css';
import PostList from './components/PostList';
import { useState } from 'react';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
    <MainHeader onCreatePost={showModalHandler} />
    <div className="App">
      <PostList isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
          />
    </div>
    </>
  );
}

export default App;
