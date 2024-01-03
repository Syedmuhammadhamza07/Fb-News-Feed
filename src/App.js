import './App.css';
import FbPost from './components/FbPost';
import { useEffect , useState } from 'react';
import FbLogo from "./pngwing.com.png"
import home from "./home.png"
import friends from "./friend.png"
import video from "./video.png"
import market from "./marketplace.png"
import gaming from "./gaming-pad.png"
import menu from "./dots-menu.png"
import messenger from "./pngwing.com (1).png"
import notification from "./bell.png"
import profile from "./components/FbPost/post-image.png"


function App() {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setNewsFeed(data.products));
  }, []);
  return (
    <div>
      {newsFeed.map((post) => (
        <FbPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
