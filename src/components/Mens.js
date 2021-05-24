import useFetch from './useFetch';
import UseData from './UseData';

export default function Mens() {
    const {data, pending, error } = useFetch('http://localhost:5000/productData')

    return (
        <div className="mens">
            { pending && <div>Loading... </div>}
            { error && <div> { error }</div>}            
            {data && <UseData data={data.filter((data)=>(data.cat==="mens"))}/>}
        </div>
    )
}
