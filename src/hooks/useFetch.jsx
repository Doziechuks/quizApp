import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = 'https://opentdb.com/';

const useFetch = ({ url }) => {
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(()=>{
  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      const result = res.data;
      setResponse(result);
      setLoading(false);

    } catch (error) {
      setError(error.message);
    }
  };
  fetchData();
},[url])
  
  return { response, error, loading };
}
 
export default useFetch;