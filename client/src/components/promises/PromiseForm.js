import React, { useState, useContext, useEffect } from 'react';
import PromiseContext from '../../context/promise/promiseContext';

const PromiseForm = () => {

    const promiseContext = useContext(PromiseContext);
    const { addPromise, current, clearCurrent, updatePromise } = promiseContext;

    useEffect(() => {
        if(current !== null){
            setPromise(current)
        } 
        else {
            setPromise({ 
                content: "",
                completed: false
            });
        }
    }, [promiseContext, current]);

    const [promise, setPromise] = useState({
        content: "",
        completed: false
    });

    const { content, completed } = promise;

    const handleChange = (e) => setPromise({...promise, [e.target.name]: e.target.value});

    const clearForm = () => {
        clearCurrent();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(current === null){
            addPromise(promise);
        }
        else {
            updatePromise(promise);
        }
        clearForm();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-primary">{current ? 'Edit your promise' : 'Add a promise'}</h2>
            <input 
                type="text" 
                placeholder="Write a promise to yourself..." 
                name="content" 
                value={content} 
                onChange={handleChange}
            />

            {/* <h5>Promise Kept?</h5>
            <input 
                type="radio" 
                name="completed" 
                value="No" 
                checked={completed === false}
                onChange={handleChange}
            /> Promise Unfulfilled!
            <br></br>
            <input 
                type="radio" 
                name="completed" 
                value="Yes" 
                checked={completed === true}
                onChange={handleChange}
            /> Promise Fulfilled! */}

            <div>
                <input 
                    type="submit" 
                    value={current ? 'Are you sure about that?' : 'You promise?'}
                    className="btn btn-primary btn-block"
                />
            </div>
            {current &&
                <div>
                    <button
                        className="btn btn-light btn-block"
                        onClick={clearForm}
                    >Clear</button>
                </div>
            }
        </form>
    )
}

export default PromiseForm;