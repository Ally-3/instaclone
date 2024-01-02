import { useEffect, useState } from 'react';
import '../App.css';
import Header2 from './header2';
import { useMemo } from 'react';

function Insta() {
  //state variables and initialization
  const [photos, setPhotos] = useState([]);                                       
  const [loggedIn] = useState(true);

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

    //the fetchImages function will only be recreated if the dependencies change, preventing unnecessary re-fetching.
    // Memoize the fetchImages function
    const fetchImagesMemoized = useMemo(() => fetchImages, []);

    // Use the memoized function in useEffect
    useEffect(() => {
        fetchImagesMemoized();
    }, [fetchImagesMemoized]);

  return (
    <div>
      {loggedIn && (
        <div className='container'>
          <Header2 />
          <section> 
            {/* <hr style={{width: 910,}}></hr> */}
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
              {photos
              .filter(item => item.id >= 10 && item.id <= 29)
              .map((filteredItem, index) => (
                <div key={index} className='photo-item'>
                  <img 
                    src={filteredItem.download_url} 
                    className='img-posts' 
                    alt={`${filteredItem.id} from picsum api`} />
                </div>
              ))}
            </div>
          )}
          {showReelsGrid && (
            <div className='photo-grid'>
                {photos
                .filter(item => item.id >= 10 && item.id <= 29)
                .map((filteredItem, index) => (
                    <div key={index} className='photo-item'>
                    <img 
                        src={filteredItem.download_url} 
                        className='img-reels' 
                        alt={`${filteredItem.id} from picsum api`} />
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
        </div>
      )}
    </div>
  );
  };

export default Insta;