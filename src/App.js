import './App.css';
import FbPost from './components/FbPost';
import { useEffect , useState } from 'react';

function App() {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setNewsFeed(data.products));
  }, []);
  return (
    <div>
      <h1>News Feed</h1>
      {newsFeed.map((post) => (
        <FbPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
