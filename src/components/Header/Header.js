import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Top 10 Greatest Actors of All Time (The Ultimate List)</h1>
            <p>The actors on this list are ranked according to their lifetime success (awards & nominations), along with their acting skills, versatility and role transformation. To me, accuracy when making a Top 10/Top 10 all time list is extremely important.</p>
            <h1 className='total-budget'>Total Budget: 100 Million</h1>
        </div>
    );
};

export default Header;