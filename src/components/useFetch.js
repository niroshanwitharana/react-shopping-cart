import { useEffect, useState } from 'react';
// we create this custom hook, it's reusable now easy to recognise custome hooks, use keyword start the function name(here 'useFetch')

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null)

    
    useEffect(() => {
        // using the AbortController to abort the fetch request associate with the specific fetch request
        const abortCont = new AbortController();
        setTimeout(()=>{
            fetch(url, { signal: abortCont.signal })
        .then(res => {
            console.log(res);
            if(!res.ok){
              throw Error('could not fetch the requested data !')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch(err => {
            // if error is an abort error we can stop updating states and getting an error messages in consloe
            if(err.name==='AbortError'){
                console.log('there is an abort Error');
            }
            else{
            setPending(false);
            setError(err.message);
            setData(null);
            }
        });
        }, 0) 
        //  we returning this clean up function
        return ()=>abortCont.abort();       
    }, [url]);

    return {data, setData, pending, error};
}
 
export default useFetch;