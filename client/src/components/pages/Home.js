import React from 'react';
import Promises from '../promises/Promises';
import PromiseForm from '../promises/PromiseForm';

function Home() {
    return (
        <div className="grid-2">
            <div>
                <PromiseForm/>
            </div>
            <div>
                <Promises />
            </div>
        </div>
    )
}

export default Home;