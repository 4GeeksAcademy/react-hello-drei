import React from "react";


export const Jumbotron = () => {
    return (
        <div className="container-sm"> 
            <div className="card mb-3 mt-3 bg-dark text-white">
                <div className="card-body p-3 text-align-center">
                    <h1 className="card-title text-start fs-1">A Warm Welcome!</h1>
                    <p className="card-text text-start">Jumbotron no longer exists in bootstrap, so i had to copy this from other place.</p>
                    <a href="#" className="btn btn-primary">Click for more</a>
                </div>
            </div>
        </div>
        
        );
    };