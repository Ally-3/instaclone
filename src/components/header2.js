import './header_2.css';
import logo1 from '../images/logo1.png';
import Carousel from './Carousel';
import tick from '../images/tick.png';
import img1 from '../images/creatives.jpg';
import img2 from '../images/future.jpg';
import img3 from '../images/helloworld.jpg';
import img4 from '../images/igtips.jpg';
import img5 from '../images/music.jpg';
import img6 from '../images/trendtalk.jpg';

function Header2() {

    const images = [
        img1, img2, img3, img4, img5, img6
    ];

    return (
     
        <div className='header2-container'>
            <div className='header2-row1'>
          
                <div className='logobox'>
                    <div>
                        <img src={logo1} width="80%" alt="logo1" className='imagelogo'/> 
                    </div>
                </div>
        
                <div className='header-text-div'>
                    <div className='header2-part1'>
                        <h2>instagram <img src={tick} width="20%" alt="tick"/></h2>
                        <div className='buttons-div'>
                            <button className='follow-bt'>Follow</button>
                            <button className='msg-bt'>Message</button>
                        </div>
                    </div>
                    <div className='header2-part2'>
                        <h5>10,384 posts</h5>
                        <h5>147M followers</h5>
                        <h5>84 following</h5>
                    </div>
            
                    <div className='header2-part3'>
                        <h3>Instagram</h3>
                        <button>@instagram</button>
                        <h6>Discover what's next on Instagram 🔎✨</h6>
                        <a style={{ fontSize: '12px', textDecoration: 'none', color: 'darkblue', textAlign: 'left'}} href="www.threads.net">open.spotify.com/episode/6Boypv1uENkj3Y2pOyn98L?si=53Rh-CjZRuCFTh0-0q5LEg</a>
                    </div>
                </div> 
            </div>
         
            <div className='carousel-div'>
                <div className='header2-part4'>
                    <Carousel images={images}/>
                </div>
            </div>
        </div>
  
    );
};

export default Header2;