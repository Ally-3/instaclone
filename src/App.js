import React, { useState } from 'react';
import '../src/App.css';
import instatext from './images/instatext.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Footer from './components/footer';
import Insta from './components/InstagramPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  return (
    <div className="App">
      <Router>

        {loggedIn && (
          <>
            <header>
              <Link to="/"><img src={instatext} alt="Logo" width="120px" /></Link>
              <div className='header-button'>
                <Link to="/logout"><Logout /></Link>
              </div>
            </header>
            <Insta />
            <Footer />
          </>
        )}

        <Routes>
          {!loggedIn && (
            <>
              <Route path="/" element={
                <Login                         
                  setEmail={setEmail}
                  email={email}
                  setPassword={setPassword}
                  password={password}
                  setLoggedIn={setLoggedIn}
                  registered={registered} />
                } 
              />
              <Route path="/signup" element={
                <Register                         
                    setEmail={setEmail}
                    email={email}
                    setPassword={setPassword}
                    password={password}
                    setLoggedIn={setLoggedIn}
                    setRegistered={setRegistered} />
                  } 
                />
            </>
          )}
          <Route path="/logout" element={<Logout />} />
          <Route path="/InstagramPage" element={<Insta />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>

        {/* <Insta /> */}

      </Router>
    </div>
  );
}

export default App;
