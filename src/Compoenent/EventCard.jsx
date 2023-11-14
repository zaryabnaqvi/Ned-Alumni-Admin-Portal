import React from 'react';

const EventCard = ({ title, description }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;