import React, { useState, useContext } from 'react';
import PromiseContext from '../../context/promise/promiseContext';

const PromiseForm = () => {

    const promiseContext = useContext(PromiseContext);

    const [promise, setPromise] = useState({
        content: "",
        completed: false
    });

    const { content, completed } = promise;

    const onChange = (e) => setPromise({...promise, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        promiseContext.addPromise(promise);
        setPromise({
            content: "",
            completed: false
        });
    };
    
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Promise</h2>
            <input 
                type="text" 
                placeholder="Write a promise to yourself..." 
                name="content" 
                value={content} 
                onChange={onChange}
            />

            {/* <h5>Promise Kept?</h5>
            <input 
                type="radio" 
                name="completed" 
                value="No" 
                checked={completed === false}
                onChange={onChange}
            /> Promise Unfulfilled!
            <br></br>
            <input 
                type="radio" 
                name="completed" 
                value="Yes" 
                checked={completed === true}
                onChange={onChange}
            /> Promise Fulfilled! */}

            <div>
                <input 
                    type="submit" 
                    value="Add Promise" 
                    className="btn btn-primary btn-block"
                />
            </div>
        </form>
    )
}

export default PromiseForm;