import UseData from './UseData';
import useFetch from './useFetch'

export default function Kids() {
    const {data, pending, error } = useFetch('http://localhost:5000/productData')

    return (
        <div className="kids">
            { pending && <div>Loading... </div>}
            { error && <div> { error }</div>}            
            {data && <UseData data={data.filter((data)=>(data.cat==="kids"))}/>}
        </div>
    )
}
