import axios from 'axios';
import {useState, useEffect} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "988e8e8d443905414"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => { 
        const fetchData = async () => {
            const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`);            
            setData(response.data)
        }
        fetchData()

    }, [term])

    return {data}
}

export default useGoogleSearch;
