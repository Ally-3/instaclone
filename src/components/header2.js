import logo1 from '../images/logo1.png';

function Header2() {
    return (
        <div className='header2-container'>
            <div className='header2-row1'>
                <div className='logobox'>
                    <div className='imagelogo'>
                        <img src={logo1} width="80px" alt="logo1"/> 
                    </div>
                </div>
                <div>
                    <div className='header2-part1'>
                        <h2>instagram</h2>
                        <button className='follow-bt'>Follow</button>
                        <button className='msg-bt'>Message</button>
                    </div>
                    <div className='header2-part2'>
                        <h5>posts</h5>
                        <h5>followers</h5>
                        <h5>following</h5>
                    </div>
                    <div className='header2-part3'>
                        <h3>Instagram</h3>
                        <button>@instagram</button>
                        <h6>Discover what's next on Instagram</h6>
                        <a style={{ fontSize: '12px', textDecoration: 'none',}} href="#">www.threads.net</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;