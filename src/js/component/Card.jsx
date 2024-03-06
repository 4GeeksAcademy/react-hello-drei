import React from "react";


export const Card = () => {
    return (
        <div className="container-fluid">
            <div className="card" style={{width: "18rem"}}>
                <img src="https://images.pexels.com/photos/18671652/pexels-photo-18671652/free-photo-of-mar-amanecer-playa-arena.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>

        );
    };