import React from 'react'
import '../styles/home.styles.css';

const Home = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Hats</h1>
                        <span className="subtitle">Shope Now</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <span className="subtitle">Shope Now</span>
                    </div> 
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Sneakers</h1>
                        <span className="subtitle">Shope Now</span>
                    </div> 
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Womens</h1>
                        <span className="subtitle">Shope Now</span>
                    </div> 
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Mens</h1>
                        <span className="subtitle">Shope Now</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Home;
