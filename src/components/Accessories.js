import useFetch from './useFetch';
import UseData from './UseData';

export default function Accessories() {
    const {data, pending, error } = useFetch('http://localhost:5000/productData')

    return (
        <div className="accessories">
            { pending && <div>Loading... </div>}
            { error && <div> { error }</div>}            
            {data && <UseData data={data.filter((data)=>(data.cat==="accessories"))}/>}
        </div>
    )
}
