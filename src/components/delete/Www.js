import React from 'react';
import '../../assets/css/bootstrap.min.css';

const Www = () => {
    
    return (
        <div className="container mt-30">
            <h3>Search</h3>
            <p>Input keyword and click button.</p>
        
            <div className="input-group mb-30">
            </div>

            <div className="input-group mt-30">
                <input type="text" className="form-control" placeholder="Search" id="search" name="search" />
                <div className="input-group-append">
                    <button type="button" className="btn btn-success">Search</button>
                </div>
            </div>
        </div>

    );
};

export default Www;
