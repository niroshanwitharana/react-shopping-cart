import React from 'react';
import UseData from './UseData';
import useFetch from './useFetch';

export default function Home() {
    const {data, pending, error } = useFetch('http://localhost:5000/productData')

    return (
        <div className="home">
            { pending && <div>Loading... </div>}
            { error && <div> { error }</div>}            
            {data && <UseData data={data}/>}
        </div>
    )
}
