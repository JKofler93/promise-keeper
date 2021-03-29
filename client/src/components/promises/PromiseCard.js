import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PromiseContext from '../../context/promise/promiseContext';

const PromiseCard = ({ promise }) => {

    const promiseContext = useContext(PromiseContext);
    
    const { deletePromise, setCurrent, clearCurrent } = promiseContext;
    const { id, content, completed } = promise;

    const handleDelete = () => {
        deletePromise(id);
        clearCurrent();
    }
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {content}
            </h3>
            <p>
                <button 
                    onClick={() => setCurrent(promise)}
                    className="btn btn-dark btn-small"
                >
                    Edit
                </button>
                <button
                    onClick={handleDelete} 
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