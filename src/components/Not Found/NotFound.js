import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-section m-5 mb-5">
            <h1 className="not-found-section mb-4">OPPS! 404 NOT FOUND...</h1>
            <img src = "https://i.pinimg.com/originals/5e/f9/d7/5ef9d70b03d22b1acd145b9422d3a33f.gif" alt = "" />
            <h2 className="mt-5 mb-5">The page you're looking for could have been deleted or never existed!</h2>
        </div>
    );
};

export default NotFound;