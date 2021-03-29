import React from 'react';
import PropTypes from 'prop-types';

const PromiseCard = ({ promise }) => {
    const { id, content, completed } = promise;
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {content}
            </h3>
            <p>
                <button 
                    className="btn btn-dark btn-small"
                >
                    Edit
                </button>
                <button 
                    className="btn btn-danger btn-small"
                >
                    Delete
                </button>
            </p>
        </div>
    )
}

PromiseCard.prototypes = {
    promise: PropTypes.object.isRequired
}

export default PromiseCard;