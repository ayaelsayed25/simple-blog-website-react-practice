import { useState, useEffect } from "react";
const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading]= useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortFetch = new AbortController();
        fetch(url, {signal : abortFetch.signal})
        .then(res => {
            if(res.ok === false)
            {
                throw new Error("Could not fetch the data");
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError')
            {
                console.log('abort fetching')
            }
            else{
                setError('Could not fetch the data');
                setLoading(false);
            }
        });
        return() => abortFetch.abort();
    }, [url]);
    return{data, isLoading, error};
}
 
export default UseFetch;