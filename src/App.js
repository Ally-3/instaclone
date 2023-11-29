import { useEffect, useState } from 'react';
import './App.css';
import instatext from './images/instatext.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  //for navigation
import Register from './components/register';
import Login from "./components/login";
import Logout from './components/logout';
import Header2 from './components/header2';
import Footer from './components/footer';

function App() {
  //state variables and initialization
  const [photos, setPhotos] = useState([]);                                       
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [showPostsGrid, setShowPostsGrid] = useState(true);
  const [showReelsGrid, setShowReelsGrid] = useState(false);
  const [showGuidesGrid, setShowGuidesGrid] = useState(false);
  const [showTaggedGrid, setShowTaggedGrid] = useState(false);

  const [boldItem, setBoldItem] = useState('POSTS', 'REELS', 'GUIDES', 'TAGGED');

  //event handling - function that sets the boldItem state variable based on the clicked item
  const handleItemClick = (item) => {
    setBoldItem(item);
  };

  // Fetch images from the Picsum API using async/await and useEffect
  async function fetchImages(){
    const response = await fetch("https://picsum.photos/v2/list");
    var data = await response.json();
    console.log(data);
    setPhotos(data);
  }
  useEffect (() => {
    fetchImages();
  },[]); //used to run fetchimages once

  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <img src={instatext} alt="Logo" width="120px" />
          </Link>
          <header className='header-button'>
            {loggedIn ? (
              <Link to="/">
                <Logout />
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <button className='login-bt'>Log In</button>
                </Link>
                <Link to="/signup">
                  <button className='signup-bt'>Sign Up</button>
                </Link>
              </>
            )}
          </header>
        </header>
      <hr />
        <Routes>
        {!loggedIn &&  (
          <Route
            path="/login"
            element={
              <Login
                setEmail={setEmail} email={email}
                setPassword={setPassword} password={password}
                setLoggedIn={setLoggedIn}
              />
            }
          />
        )}
          <Route
          path="/signup"
          element={
            <Register
              setEmail={setEmail} email={email}
              setPassword={setPassword} password={password}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        </Routes>
    </Router>
      {!loggedIn ? <h1>user is logged out</h1> : <h1></h1>}
      {loggedIn && (
        <div className='container'>
          <Header2 />
          <section> 
            <hr style={{width: 910,}}></hr>
            <ul>
              <li
                onClick={() => {
                  handleItemClick('POSTS');
                  setShowPostsGrid(true);
                  setShowReelsGrid(false);
                  setShowGuidesGrid(false);
                  setShowTaggedGrid(false);
                }}
                className={boldItem === 'POSTS' ? 'make-bold' : ''}
              >
              POSTS
              </li>
              <li
                onClick={() => {
                  handleItemClick('REELS');
                  setShowPostsGrid(false);
                  setShowReelsGrid(true);
                  setShowGuidesGrid(false);
                  setShowTaggedGrid(false);
                }}
                className={boldItem === 'REELS' ? 'make-bold' : ''}
              >
              REELS
              </li>
              <li
                onClick={() => {
                  handleItemClick('GUIDES');
                  setShowPostsGrid(false);
                  setShowReelsGrid(false);
                  setShowGuidesGrid(true);
                  setShowTaggedGrid(false);
                }}
                className={boldItem === 'GUIDES' ? 'make-bold' : ''}
              >
              GUIDES
              </li>
              <li
                onClick={() => {
                  handleItemClick('TAGGED');
                  setShowPostsGrid(false);
                  setShowReelsGrid(false);
                  setShowGuidesGrid(false);
                  setShowTaggedGrid(true);
                }}
                className={boldItem === 'TAGGED' ? 'make-bold' : ''}
              >
              TAGGED
              </li>
            </ul>
          </section>
          {showPostsGrid && (
            <div className='photo-grid'>
              {photos.map((item, index) => (
                <div key={index} className='photo-item'>
                  <img src={item.download_url} width="300px" height="300px" alt="from picsum api" />
                </div>
              ))}
            </div>
          )}
          {showReelsGrid && (
            <div className='photo-grid'>
              {photos.map((item, index) => (
                <div key={index} className='photo-item'>
                  <img src={item.download_url} width="300px" height="450px" alt="from picsum api" />
                </div>
              ))}
            </div>
          )}
          {showGuidesGrid && (
            <div>
              {photos.map((item, index) => (
                <div key={index} className='photo-item'>
                  <h2>{item.url}</h2>
                </div>
              ))}
            </div>
          )}
          {showTaggedGrid && (
            <div>
              {photos.map((item, index) => (
                <div key={index} className='photo-item'>
                  <h2>{item.author}</h2>
                </div>
              ))}
            </div>
          )}
          <Footer />
        </div>
      )}
    </div>
  );
  };

export default App;