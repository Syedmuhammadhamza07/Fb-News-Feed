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

import facebookLogo from "./facebook-logo.png"
import fbMessenger from "./icons8-facebook-messenger-50.png"
import fbNotification from "./icons8-notification-bell-48.png"
import add from "./icons8-plus-48.png"

import coloredNotificationBell from "./icons8-notification-bell-96.png"
import coloredMessenger from "./icons8-messenger-100.png"
import Humburger from "./humburger.png"



function App() {
  const [newsFeed, setNewsFeed] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setNewsFeed(data.products));
  }, []);
  return (
    <div className='main-container'>

      <div className='main-header'>
      <div className='header-div'>
          <div className='fb-main'>
            <img src={FbLogo} className='main-img'/>
            <input type='text' placeholder='Search Facebook' className='search-box'/>
          </div>

          <div className='other-tabs'>
            <img src={home} className='other-img'/>
            <img src={friends} className='other-img'/>
            <img src={video} className='other-img'/>
            <img src={market} className='other-img'/>
            <img src={gaming} className='other-img'/>
          </div>

          <div className='profile-info'>
            <img src={menu} className='menu-img'/>
            <img src={messenger} className='messenger-img'/>
            <img src={notification} className='notification-img'/>
            <img src={profile} className='profile-img'/>
          </div>
      </div>
      </div>

      {/* max-width: 700px; */}

      <div className='laptop-header-div'>
      <div className='header-div'>
          <div className='fb-main'>
            <img src={FbLogo} className='main-img'/>
            <input type='text' className='search-box'/>
            <img src={Humburger} className='other-img'/>
          </div>

          <div className='profile-info'>
            <img src={add} className='add-img'/>
            <img src={coloredMessenger} className='messenger-img'/>
            <img src={coloredNotificationBell} className='notification-img'/>
            <img src={profile} className='profile-img'/>
          </div>
      </div>
      </div>

      {/* Tablet header */}

      <div className='tablet-header-div'>
      <div className='header-div'>
          <div className='fb-main'>
            <img src={FbLogo} className='main-img'/>
            <input type='text' className='search-box'/>
          </div>

          <div className='other-tabs'>
            <img src={home} className='other-img'/>
            <img src={friends} className='other-img'/>
            <img src={video} className='other-img'/>
            <img src={market} className='other-img'/>
            <img src={Humburger} className='other-img'/>
          </div>

          <div className='profile-info'>
            <img src={add} className='add-img'/>
            <img src={messenger} className='messenger-img'/>
            <img src={notification} className='notification-img'/>
            <img src={profile} className='profile-img'/>
          </div>
      </div>
      </div>

      {/* Mobile Large */}
      <div className='facebook-header'>
        <div className='fb-main'>
          <img src={facebookLogo} className='facebook-img'/>
          <div className='search-div'>
            <input type='text' className='search-box'/>
            <img src={Humburger} className='fb-menu'/>
          </div>
        </div>
        <div className='mobile-header-div'>
          <div className='other-tabs'>
            <img src={home} className='other-img'/>
            <img src={friends} className='other-img'/>
            <img src={fbMessenger} className='messenger-img'/>
            <img src={video} className='other-img'/>
            <img src={fbNotification} className='notification-img'/>
            <img src={market} className='other-img'/>
          </div>
        </div>
      </div>

      {newsFeed.map((post) => (
        <FbPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default App;
