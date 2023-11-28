import { useEffect, useState } from 'react';
import './App.css';
import instatext from './images/instatext.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/register';
import Login from "./components/login";
import Logout from './components/logout';
import Header2 from './components/header2';
import Footer from './components/footer';

function App() {

  const [photos, setPhotos] = useState([]); //useState variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [showPostsGrid, setShowPostsGrid] = useState(true);
  const [showReelsGrid, setShowReelsGrid] = useState(false);
  const [showGuidesGrid, setShowGuidesGrid] = useState(false);
  const [showTaggedGrid, setShowTaggedGrid] = useState(false);

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
        <div>
          <Header2 />
          <section>
            <hr style={{width: 910,}}></hr>
            <ul>
              <li onClick={() => { 
                setShowPostsGrid(true); 
                setShowReelsGrid(false); 
                setShowGuidesGrid(false); 
                setShowTaggedGrid(false);
                }}>POSTS</li>
              <li onClick={() => { 
                setShowPostsGrid(false); 
                setShowReelsGrid(true); 
                setShowGuidesGrid(false); 
                setShowTaggedGrid(false);
                }}>REELS</li>
              <li onClick={() => { 
                setShowPostsGrid(false); 
                setShowReelsGrid(false); 
                setShowGuidesGrid(true); 
                setShowTaggedGrid(false); 
                }}>GUIDES</li>
              <li onClick={() => { 
                setShowPostsGrid(false); 
                setShowReelsGrid(false); 
                setShowGuidesGrid(false); 
                setShowTaggedGrid(true); 
                }}>TAGGED</li>
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
            <div className='photo-grid'>
              {photos.map((item, index) => (
                <div key={index} className='photo-item'>
                  <h2>{item.url}</h2>
                </div>
              ))}
            </div>
          )}
          {showTaggedGrid && (
            <div className='photo-grid'>
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