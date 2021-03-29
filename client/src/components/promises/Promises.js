import React, { Fragment, useContext } from 'react';
import PromiseCard from './PromiseCard';
import PromiseContext from '../../context/promise/promiseContext';

function Promises() {
    const promiseContext = useContext(PromiseContext);

    const { promises } = promiseContext;

    return (
        <Fragment>
            {promises.map(promise => (
                <PromiseCard key={promise.id} promise={promise}/>
            ))}
        </Fragment>
    )
}

export default Promises;